const DS = require('../models/DS-19')
const Productos = require('../models/Producto')
const ventas = require('../models/ventas')
const Bar = require('../models/Bar')
const Cocina = require('../models/Cocina')
const DiasSol = require ('../models/DS')
const jsonwebtoken = require('jsonwebtoken')
const Usuario = require('../models/Usuarios')
const moment = require('moment-timezone');
//Mostrar productos
module.exports.mostrar = (req, res) => {
  const token = req.cookies.jwt;
  let mesero = "";
  if (token) {
    jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.send('Error al verificar el token.');
      }
      mesero = decoded.user;
    });
  }
    Promise.all([
        DS.find({}),
        Productos.find({}),
        Usuario.find({ user: mesero })
    ])
    .then(([DS, Productos,Usuario]) => {
      const tipoUsuario = Usuario.length > 0 ? Usuario[0].type : null;
        res.render('DS-19', { DS: DS, productos: Productos,tipoUsuario: tipoUsuario});
    })
    .catch(err => console.log(err, 'Error mostrando datos'));
};
//Guardar Productos
module.exports.Crear = async (req, res) => {
  const token = req.cookies.jwt;
    if (token) {
      jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.send('Error al verificar el token.');
        }
        mesero = decoded.user;
      })
    }
  const id = req.params.id;
  try {
    const producto = await Productos.findById(id).lean().exec();
    if (!producto) {
      return res.status(404).send("Producto no encontrado");
    }
    // Obtener la fecha actual en la zona horaria de Colombia
    const ahora = moment().tz('America/Bogota');
    const Fecha = ahora.format('YYYY-MM-DD');
    if (producto.Tipo == "Bar") {
      const ds = await DiasSol.findOne({ DS: "DS-19", Ingreso: Fecha });
      if (!ds) {
        return res.status(404).send("No se encontró el día de sol DS-19 para hoy");
      }
      const ahora = new Date();
      const hora = ahora.getHours();
      const minutos = ahora.getMinutes();
      const Mesa = "DS-19";
      const Comanda = ds.Comanda;
      const Producto = producto.Producto;
      const Precio = producto.Precio;
      const Tipo = producto.Tipo;
      const Usuario = mesero;
      const Hora = hora + ":" + minutos;
      const bar = new Bar({ Mesa, Comanda,Producto, Precio, Usuario, Tipo, Hora });
      await bar.save();
    } else if (producto.Tipo == "Cocina") {
      const ds = await DiasSol.findOne({ DS: "DS-19", Ingreso: Fecha });
      const ahora = new Date();
      const hora = ahora.getHours();
      const minutos = ahora.getMinutes();
      const Mesa = "DS-19";
      const Comanda = ds.Comanda;
      const Producto = producto.Producto;
      const Precio = producto.Precio;
      const Tipo = producto.Tipo;
      const Usuario = mesero;
      const Hora = hora + ":" + minutos;
      const cocina = new Cocina({ Mesa, Comanda,Producto, Precio, Usuario, Tipo, Hora });
      await cocina.save();
    } else {
      const ds = await DiasSol.findOne({ DS: "DS-19", Ingreso: Fecha });
      const ahora = new Date();
      const hora = ahora.getHours();
      const minutos = ahora.getMinutes();
      const Producto= producto.Producto;
      const Precio = producto.Precio;
      const Usuario = mesero;
      const Tipo = producto.Tipo;
      const Hora = hora + ":" + minutos
      const newUsuario = new DS({Producto, Precio, Usuario, Tipo, Hora });
      await newUsuario.save();

      // Actualizar la cantidad del producto en la colección Productos
      let Cantidad = producto.Cantidad;
      if (Cantidad > 0) {
        Cantidad -= 1;
        await Productos.findByIdAndUpdate(producto._id, { Cantidad });
      }
    }

    res.redirect('/DS-19');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error interno del servidor");
  }
};
//Cancelar cuenta
module.exports.pagar = async (req, res) => {
  try {
   const productos = await DS.find().lean().exec();
  
   if (!productos || productos.length === 0) {
     return res.status(404).send('No se encontraron productos');
   }
   const productosVendidosIds = [];
   for (const producto of productos) {
     const Producto = producto.Producto;
     const Precio = producto.Precio;
     const Tipo = producto.Precio;
     const Fecha = new Date().toISOString().split('T')[0];
     const nuevoDocumento = new ventas({
       Producto,
       Precio,
       Tipo,
       Fecha
     });
     await nuevoDocumento.save();
     productosVendidosIds.push(producto._id);
   }
   await DS.deleteMany({ _id: { $in: productosVendidosIds } });
   res.redirect('/DS-19');
  } catch (error) {
   console.error(error);
   res.status(500).send('Error interno del servidor');
  }
}
//Eliminar de la cuenta
module.exports.eliminar = (req, res) => {
  const id = req.params.id
  DS.findByIdAndDelete({ _id: id }).exec()
    .then(resultado => {
      console.log("Objeto eliminado : ", resultado);
    })
    .catch(error => {
      console.log(error)
    });
  res.redirect('/DS-19')
}

//Agregar al dia de sol
module.exports.agregar = async (req, res) => {
  const DS = req.body.DS
  const Comanda = req.body.Comanda
  const Nombres = req.body.Nombre
  const Apellidos = req.body.Apellido
  const Tipo = req.body.tipo
  const Documento = req.body.Documento
  const Abono = req.body.Abono
  const Final = req.body.Pago
  const Ingreso = req.body.Fecha
  console.log(Ingreso)
  const newUsuario = new DiasSol({ DS, Comanda, Nombres, Apellidos, Tipo, Documento, Abono, Final, Ingreso })
  console.log(newUsuario)
  await newUsuario.save()
  console.log('/'+DS)
  res.redirect('/'+DS)
}