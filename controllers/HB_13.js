const HB = require('../models/HB-13')
const Productos = require('../models/Producto')
const ventas = require('../models/ventas')
const Bar = require('../models/Bar')
//Mostrar productos
module.exports.mostrar = (req, res) => {
    Promise.all([
        HB.find({}),
        Productos.find({})
    ])
    .then(([HB, Productos,]) => {
        res.render('HB-13', { HB: HB, productos: Productos});
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
            const Mesa = "HB-13"
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
     res.redirect('/HB-13')
}
module.exports.pagar = async (req, res) => {
  try {
      // Obtener todos los documentos de ModeloOrigen
      const documentosOrigen = await HB.find();
      // Iterar sobre los documentos obtenidos
      for (const documento of documentosOrigen) {
          // Crear un nuevo documento basado en el documento actual
          const nuevoDocumento = new ventas(documento.toObject());
          // Guardar el nuevo documento en la colección de ModeloDestino
          await nuevoDocumento.save();
      }
      console.log('Datos copiados exitosamente de ModeloOrigen a ModeloDestino.');
      // Enviar respuesta si es necesario
      res.status(200).send('Datos copiados exitosamente de ModeloOrigen a ModeloDestino.');
  } catch (error) {
      console.error('Error al copiar los datos:', error);
      
      // Enviar una respuesta de error si es necesario
      res.status(500).send('Ocurrió un error al copiar los datos: ' + error.message);
  }
}
module.exports.eliminar = (req,res) =>{
    const id = req.params.id
    HB.findByIdAndDelete({_id:id}).exec()
  .then(resultado => {
    console.log("Objeto eliminado : ", resultado); 
  })
  .catch(error => {
    console.log(error) 
  });
    res.redirect('/HB-13')       
}