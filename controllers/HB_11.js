const HB = require('../models/HB-11');
const Productos = require('../models/Producto');
const Bar = require('../models/Bar');
const Huesped = require('../models/Hospedaje');
const ventas = require('../models/ventas');
const Cocina = require('../models/Cocina');
const jsonwebtoken = require('jsonwebtoken');
const Usuario = require('../models/Usuarios');
const Pago = require('../models/Pagos');

// Mostrar productos
module.exports.mostrar = (req, res) => {
  const token = req.cookies.jwt;
  let usuario = "";
  if (token) {
    jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.send('Error al verificar el token.');
      }
      usuario = decoded.user;
    });
  }
  Promise.all([
    HB.find({}),
    Productos.find({}),
    Usuario.find({ user: usuario }),
    Huesped.find({
      HB: 'HB-11'
    })
  ])
  .then(([HB, Productos, Usuario, Huesped]) => {
    const tipoUsuario = Usuario.length > 0 ? Usuario[0].type : null;
    res.render('HB-11', {
      HB: HB,
      productos: Productos,
      tipoUsuario: tipoUsuario,
      huespedes: Huesped 
    });
  })
  .catch(err => {
    console.log(err, 'Error mostrando datos');
    res.status(500).send('Error mostrando datos');
  });
};

// Guardar Productos
module.exports.Crear = async (req, res) => {
  const id = req.params.id;
  let usuario = "";
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
        usuario = decoded.user;
      });
    }
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const Mesa = "HB-11";
    const Comanda = "HB-11";
    const Producto = producto.Producto;
    const Precio = producto.Precio;
    const Tipo = producto.Tipo;
    const Usuario = usuario;
    const Hora = hora + ":" + minutos;
    if (producto.Tipo == "Bar") {
      const bar = new Bar({ Mesa, Comanda, Producto, Precio, Usuario, Tipo, Hora });
      await bar.save();
    } else if (producto.Tipo == "Cocina") {
      const cocina = new Cocina({ Mesa, Comanda, Producto, Precio, Usuario, Tipo, Hora });
      await cocina.save();
    } else {
      const newUsuario = new HB({
        Mesa: Mesa,
        Comanda: Comanda,
        Producto: Producto,
        Precio: Precio,
        Usuario: usuario,
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
    res.redirect('/HB-11');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error interno del servidor");
  }
};

// Pagar
module.exports.pagar = async (req, res) => {
  const moment = require('moment-timezone');
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
    res.redirect('/HB-11');
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
  res.redirect('/HB-11');
};

// Agregar Huesped
module.exports.agregar = async (req, res) => {
  const HB = req.body.Habitacion;
  const Nombre = req.body.Nombre;
  const Adultos = req.body.Adultos;
  const Niños = req.body.Niños;
  const Bebes = req.body.Bebes;
  const Ingreso = req.body.Fecha;
  const Salida = req.body.Salida;
  const newUsuario = new Huesped({ HB, Nombre,  Adultos, Niños, Bebes,Ingreso, Salida });
  await newUsuario.save();
  res.redirect('/HB-11');
};
