const HB = require('../models/HB-1')
const Productos = require('../models/Producto')
const ventas = require('../models/ventas')
const Bar = require('../models/Bar')
const DS = require('../models/DS')
const Huesped = require('../models/Hospedaje')
//Mostrar productos
module.exports.mostrar = (req, res) => {
    Promise.all([
        HB.find({}),
        Productos.find({})
    ])
    .then(([HB, Productos,]) => {
        res.render('HB-1', { HB: HB, productos: Productos});
    })
    .catch(err => console.log(err, 'Error mostrando datos'));
};
//Guardar Productos
module.exports.Crear = async (req,res)=>{
     const id = req.params.id
     Productos.findById(id).lean().exec()
    .then(async producto => {
        if(producto.Tipo=="Bar"){
            const ahora = new Date();
            const hora = ahora.getHours();
            const minutos = ahora.getMinutes();
            const Mesa = "HB-1"
            const Producto = producto.Producto;
            const Precio = producto.Precio;
            const Tipo = producto.Tipo;
            const Usuario = "Manuel";
            const Hora = hora+":"+minutos;
            const bar = new Bar({Mesa,Producto,Precio,Usuario,Tipo,Hora})
            console.lognewUsuario
            await bar.save()
        }else{
        const ahora = new Date();
        const hora = ahora.getHours();
        const minutos = ahora.getMinutes();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora = hora+":"+minutos;
        const newUsuario = new HB({Producto,Precio,Usuario,Tipo,Hora})
        console.lognewUsuario
        await newUsuario.save()
              // Actualizar la cantidad del producto en la colección Productos
              let Cantidad = producto.Cantidad ;
              if(Cantidad > 0){
                const id = producto._id.toString()
                Cantidad =  Cantidad -= 1; 
                await Productos.findByIdAndUpdate(id,{Cantidad});
              }
             
    }
    })
    .catch(err => {
        console.error(err);
    });
     res.redirect('/HB-1')
}
module.exports.pagar = async (req, res) => {
  try {
    const productos = await HB.find().lean().exec();

    if (!productos || productos.length === 0) {
      return res.status(404).send('No se encontraron productos');
    }

    // Crear un array para almacenar los IDs de los productos vendidos
    const productosVendidosIds = [];

    for (const producto of productos) {
      const Producto = producto.Producto;
      const Precio = producto.Precio;
      const Tipo = producto.Precio;
      const Fecha = new Date().toISOString().split('T')[0]; // Obtiene la fecha actual en formato 'YYYY-MM-DD'

      const nuevoDocumento = new ventas({
        Producto,
        Precio,
        Tipo,
        Fecha
      });

      await nuevoDocumento.save();

      // Agregar el ID del producto vendido al array
      productosVendidosIds.push(producto._id);
    }

    // Eliminar los productos vendidos de la colección "HB"
    await HB.deleteMany({ _id: { $in: productosVendidosIds } });

    res.redirect('/HB-1');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports.eliminar = (req,res) =>{
    const id = req.params.id
    HB.findByIdAndDelete({_id:id}).exec()
  .then(resultado => {
    console.log("Objeto eliminado : ", resultado); 
  })
  .catch(error => {
    console.log(error) 
  });
    res.redirect('/HB-1')       
}
module.exports.agregar = async(req,res) =>{
  const HB = req.body.Habitacion
  const Nombres = req.body.Nombre
  const Apellidos = req.body.Apellido
  const Tipo = req.body.tipo
  const Documento = req.body.Documento
  const Celular = req.body.Celular
  const Correo = req.body.Correo
  const Abono = req.body.Abono
  const Final = req.body.Pago
  const Ingreso = req.body.Fecha
  const Salida = req.body.Salida
  console.log(Ingreso)
  const newUsuario = new Huesped({HB,Nombres,Apellidos,Tipo,Documento,Celular,Correo,Abono,Final,Ingreso,Salida})
  console.log(newUsuario)
  await newUsuario.save()
  res.redirect('/HB-1')  
}
//Mostrar Hospedaje
module.exports.mostrarH = (req, res) => {
  Promise.all([
    Huesped.find({}),
    DS.find({})
])
.then(([Huesped, DS,]) => {
    res.render('hospedaje', {Huesped: Huesped, DS: DS});
})
.catch(err => console.log(err, 'Error mostrando datos'));
}