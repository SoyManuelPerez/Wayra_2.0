const Comiciones = require('../models/Comision')
//Mostrar Comiciones
module.exports.mostrar = (req, res) => {
    Comiciones.find({})
    .then(Comiciones => res.render('Comisiones', {Comiciones: Comiciones}))
    .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}
//Eliminar Usuario
module.exports.eliminar = (req,res) =>{
    const id = req.params.id
    Comiciones.findByIdAndDelete({_id:id}).exec()
  .then(resultado => {
    console.log("Objeto eliminado : ", resultado); 
  })
  .catch(error => {
    console.log(error) 
  });
    res.redirect('/Comisiones')       
}