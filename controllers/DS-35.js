const DS = require('../models/DS-35')
const Productos = require('../models/Producto')
const ventas = require('../models/ventas')
const Bar = require('../models/Bar')
const Cocina = require('../models/Cocina')
const DiasSol = require ('../models/DS')
const jsonwebtoken = require('jsonwebtoken')
const Usuario = require('../models/Usuarios')
const moment = require('moment-timezone');
const Pago = require('../models/Pagos')
//Mostrar productos
module.exports.mostrar = (req, res) => {
  const token = req.cookies.jwt;
  let usuario = ""
  if (token) {
    jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.redirect("/");
      }
      usuario = decoded.user;
    });
  }
  Promise.all([
    DS.find({}), 
    Productos.find({}),
    Usuario.find({ user: usuario }),
    DiasSol.find({
      DS: 'DS-35'
    })
  ])
  .then(([DS, Productos, Usuario, DiasSol]) => {
    const tipoUsuario = Usuario.length > 0 ? Usuario[0].type : null;
    res.render('DS-35', {
      DS: DS,
      productos: Productos,
      tipoUsuario: tipoUsuario,
      ds: DiasSol 
    });
  })
  .catch(err => {
    console.log(err, 'Error mostrando datos');
    res.status(500).send('Error mostrando datos');
  });
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
  const unidad = req.body.unidad;
  try {
    const producto = await Productos.findById(id).lean().exec();
    if (!producto) {
      return res.status(404).send("Producto no encontrado");
    }
    // Obtener la fecha actual en la zona horaria de Colombia
    const ahora = moment().tz('America/Bogota');
    const Fecha = ahora.format('YYYY-MM-DD');
    const ds = await DiasSol.findOne({ DS: "DS-35", Ingreso: Fecha });
    if(ds){
    let hora = ahora.hours();
    const minutos = ahora.minutes();
    let Hora = hora + ":" + minutos +"am";
    if(hora == 12){
      Hora = hora + ":" + minutos +"pm";
    }
    else if(hora>12){
      hora = hora-12;
      Hora = hora + ":" + minutos +"pm";
    } 
    const Mesa = "DS-35";
    const Comanda = ds.Comanda;
    const Producto = producto.Producto;
    const Precio = producto.Precio;
    const Tipo = producto.Tipo;
    const Cantidad = unidad
    const Usuario = mesero;
    if (producto.Tipo == "Bar") {
      const bar = new Bar({ Mesa, Comanda, Producto, Cantidad, Precio, Usuario, Tipo, Hora });
      await bar.save();
    } else if (producto.Tipo == "Cocina") {
      const cocina = new Cocina({ Mesa, Comanda, Producto, Cantidad, Precio, Usuario, Tipo, Hora });
      await cocina.save();
    } else {
      const newUsuario = new DS({Mesa, Comanda, Producto, Cantidad, Precio, Usuario, Tipo, Hora});
      await newUsuario.save();
      // Actualizar la cantidad del producto en la colección Productos
      let CantidadP = producto.Cantidad;
      if (CantidadP > 0) {
       CantidadP -= unidad;
        await Productos.findByIdAndUpdate(producto._id, { CantidadP });
      }
    }}
    else{
      return res.send("Dia de sol no creado")
    }
    res.redirect('/DS-35');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error interno del servidor");
  }
}
//Cancelar cuenta
module.exports.pagar = async (req, res) => {
  try {
   const productos = await DS.find().lean().exec();
  
   if (!productos || productos.length === 0) {
     return res.status(404).send('No se encontraron productos');
   }
   const productosVendidosIds = [];
   const Cuenta = req.body.Cuenta
    const Monto = req.body.Monto
    const Tipo = req.body.Metodo
    const Montoextra = req.body.Montoextra
    const Tipoextra = req.body.Metodoextra
    const ahora = moment().tz('America/Bogota');
    const Fecha = ahora.format('DD-MM-YYYY');
    const newpago = new Pago({ Cuenta, Monto, Tipo, Montoextra, Tipoextra, Fecha });
    await newpago.save();
    for (const producto of productos) {
      const Mesero = producto.Usuario;
      const Producto = producto.Producto;
      const Precio = producto.Precio;
      const Tipo = producto.Tipo;
      const Cantidad = producto.Cantidad;
      const nuevoDocumento = new ventas({
        Mesero,
        Producto,
        Precio,
        Tipo,
        Cantidad,
        Fecha
      });
      await nuevoDocumento.save();
      productosVendidosIds.push(producto._id);
    }
   await DiasSol.deleteOne({DS:"DS-35"})
   await DS.deleteMany({ _id: { $in: productosVendidosIds } });
   res.redirect('/DS-35');
  } catch (error) {
   console.error(error);
   res.status(500).send('Error interno del servidor');
  }
}
//Eliminar de la cuenta
module.exports.eliminar = async (req, res) => {
  const id = req.params.id;
  try {
    const resultado = await DS.findById(id).exec();
    console.log("Objeto eliminado: ", resultado);
    if (resultado) {
      const Nombre = resultado.Producto;
      const producto = await Productos.findOne({ Producto: Nombre }).exec();
      if (producto) {
        let Cantidad = producto.Cantidad || 0;
        Cantidad += resultado.Cantidad;
        await Productos.findByIdAndUpdate(producto._id, { Cantidad });
        console.log(`Cantidad actualizada para el producto ${Nombre}: ${Cantidad}`);
        await DS.findByIdAndDelete({ _id: id })
      }
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect('/DS-35');
};

//Agregar al dia de sol
module.exports.agregar = async (req, res) => {
  const DS = req.body.DS
  const Comanda = req.body.Comanda
  const Nombre = req.body.Nombre
  const Adultos = req.body.Adultos
  const Niños = req.body.Niños
  const Bebes = req.body.Bebes
  const Ingreso = req.body.Fecha
  console.log(Ingreso)
  const newUsuario = new DiasSol({ DS, Comanda, Nombre,  Adultos, Niños, Bebes, Ingreso })
  console.log(newUsuario)
  await newUsuario.save()
  res.redirect('/'+DS)
}
