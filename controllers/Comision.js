const Comiciones = require('../models/Comision')
//Mostrar Comiciones
module.exports.mostrar = (req, res) => {
    Comiciones.find({})
    .then(Comiciones => res.render('Comisiones', {Comiciones: Comiciones}))
    .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}