const DS = require('../models/DS')
//Mostrar productos
module.exports.mostrar = (req, res) => {
    DS.find({})
        .then(DS => res.render('DS', { DS: DS }))
        .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}