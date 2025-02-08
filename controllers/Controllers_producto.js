const Productos = require('../models/Producto')
//Mostrar productos
module.exports.mostrar = (req, res) => {
    Productos.find({})
    .then(productos => res.render('Producto', {productos: productos}))
    .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}
//Guardar Productos
module.exports.Crear = async (req,res)=>{
    const {Producto,Precio,Cantidad,Tipo} = req.body
    console.log(req.body)
    const newProducto = new Productos({Producto,Precio,Cantidad,Tipo})
    await newProducto.save()
    res.redirect('/productos')
}
module.exports.eliminar = (req,res) =>{
    const id = req.params.id
    Productos.findByIdAndDelete({_id:id}).exec()
  .then(resultado => {
    console.log("Objeto eliminado : ", resultado); 
  })
  .catch(error => {
    console.log(error) 
  });
    res.redirect('/productos')       
}
//Editar Producto
module.exports.editar = (req,res) =>{
    const producto = req.body.ProductoE
    const Cantidad = req.body.CantidadE
    const Precio = req.body.PrecioE
    console.log(Cantidad)
    Productos.findOneAndUpdate({Producto:producto.trim()},{Precio,Cantidad}).exec()
    .then(resultado=>{
        console.log("Objeto Actualizado : ", resultado); 
    })
    .catch(error=>{
        console.log(error) 
    })
    res.redirect('/productos')  
}