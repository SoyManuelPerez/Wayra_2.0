const ventas = require('../models/ventas')
//Mostrar productos
module.exports.mostrar = (req, res) => {
    ventas.find({})
        .then(ventas => res.render('Ventas', { ventas: ventas }))
        .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}
module.exports.eliminar = (req,res) =>{
    const id = req.params.id
    ventas.findByIdAndDelete({_id:id}).exec()
  .then(resultado => {
    console.log("Objeto eliminado : ", resultado); 
  })
  .catch(error => {
    console.log(error) 
  });
    res.redirect('/Ventas')       
}