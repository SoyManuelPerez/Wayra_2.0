const HB = require('../models/ECB-21');
const Productos = require('../models/Producto');
const Bar = require('../models/Bar');
const Huesped = require('../models/Hospedaje');
const ventas = require('../models/ventas');
const Cocina = require('../models/Cocina');
const jsonwebtoken = require('jsonwebtoken');
const Usuario = require('../models/Usuarios');
const Pago = require('../models/Pagos');
const moment = require('moment-timezone');

// Mostrar productos
module.exports.mostrar = (req, res) => {
  const token = req.cookies.jwt;
  let mesero = "";
  if (token) {
    jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.send('Error al verificar el token.');
      }
      mesero = decoded.user;
    });
  }
  Promise.all([
    HB.find({}),
    Productos.find({}),
    Usuario.find({ user: mesero })
  ])
  .then(([HB, Productos, Usuario]) => {
    const tipoUsuario = Usuario.length > 0 ? Usuario[0].type : null;
    res.render('ECB-21', { HB: HB, productos: Productos, tipoUsuario: tipoUsuario });
  })
  .catch(err => {
    console.log(err, 'Error mostrando datos');
    res.status(500).send('Error mostrando datos');
  });
};

// Guardar Productos
module.exports.Crear = async (req, res) => {
  const id = req.params.id;
  let mesero = "";
  try {
    const producto = await Productos.findById(id).lean().exec();
    if (!producto) {
      return res.status(404).send("Producto no encontrado");
    }
    const token = req.cookies.jwt;
    if (token) {
      jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.send('Error al verificar el token.');
        }
        mesero = decoded.user;
      });
    }
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const Mesa = "ECB-21";
    const Comanda = "121";
    const Producto = producto.Producto;
    const Precio = producto.Precio;
    const Tipo = producto.Tipo;
    const Usuario = mesero;
    const Hora = hora + ":" + minutos;
    if (producto.Tipo === "Bar") {
      const bar = new Bar({ Mesa, Comanda, Producto, Precio, Usuario, Tipo, Hora });
      await bar.save();
    } else if (producto.Tipo === "Cocina") {
      const cocina = new Cocina({ Mesa, Comanda, Producto, Precio, Usuario, Tipo, Hora });
      await cocina.save();
    } else {
      const newUsuario = new HB({
        Mesa: Mesa,
        Comanda: Comanda,
        Producto: Producto,
        Precio: Precio,
        Usuario: mesero,
        Tipo: Tipo,
        Hora: Hora
      });
      await newUsuario.save();
      
      // Actualizar la cantidad del producto en la colección Productos
      let Cantidad = producto.Cantidad;
      if (Cantidad > 0) {
        Cantidad -= 1;
        await Productos.findByIdAndUpdate(producto._id, { Cantidad });
      }
    }
    res.redirect('/ECB-21');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error interno del servidor");
  }
};

// Pagar
module.exports.pagar = async (req, res) => {
  try {
    const productos = await HB.find().lean().exec();
    if (!productos || productos.length === 0) {
      return res.status(404).send('No se encontraron productos');
    }
    const productosVendidosIds = [];
    const Cuenta = req.body.Cuenta;
    const Monto = req.body.Monto;
    const Tipo = req.body.Metodo;
    const Montoextra = req.body.Montoextra;
    const Tipoextra = req.body.Metodoextra;
    const ahora = moment().tz('America/Bogota');
    const Fecha = ahora.format('YYYY-MM-DD');
    const newpago = new Pago({ Cuenta, Monto, Tipo, Montoextra, Tipoextra, Fecha });
    await newpago.save();
    for (const producto of productos) {
      const Mesero = producto.Usuario;
      const Producto = producto.Producto;
      const Precio = producto.Precio;
      const Tipo = producto.Tipo;
      const nuevoDocumento = new ventas({
        Mesero,
        Producto,
        Precio,
        Tipo,
        Fecha
      });
      await nuevoDocumento.save();
      productosVendidosIds.push(producto._id);
    }
    await HB.deleteMany({ _id: { $in: productosVendidosIds } });
    res.redirect('/ECB-21');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};

// Eliminar
module.exports.eliminar = (req, res) => {
  const id = req.params.id;
  HB.findByIdAndDelete({ _id: id }).exec()
    .then(resultado => {
      console.log("Objeto eliminado : ", resultado);
    })
    .catch(error => {
      console.log(error);
    });
  res.redirect('/ECB-21');
};

// Agregar Huesped
module.exports.agregar = async (req, res) => {
  const HB = req.body.Habitacion;
  const Nombres = req.body.Nombre;
  const Apellidos = req.body.Apellido;
  const Tipo = req.body.tipo;
  const Documento = req.body.Documento;
  const Celular = req.body.Celular;
  const Correo = req.body.Correo;
  const Adultos = req.body.Adultos;
  const Niños = req.body.Niños;
  const Bebes = req.body.Bebes;
  const Abono = req.body.Abono;
  const Final = req.body.Pago;
  const Ingreso = req.body.Fecha;
  const Salida = req.body.Salida;
  const newUsuario = new Huesped({ HB, Nombres, Apellidos, Tipo, Documento, Celular, Correo, Adultos, Niños, Bebes, Abono, Final, Ingreso, Salida });
  await newUsuario.save();
  res.redirect('/ECB-21');
};
