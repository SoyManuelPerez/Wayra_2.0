const Pagos = require('../models/Pagos')
//Mostrar Pagos
module.exports.mostrar = (req, res) => {
    Pagos.find({})
    .then(Pagos => res.render('ingreso', {pagos: Pagos}))
    .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}