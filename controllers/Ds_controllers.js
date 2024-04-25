const DS = require('../models/DS')
const DiasSol = require('../models/DS')
//Mostrar productos
module.exports.mostrar = (req, res) => {
    DS.find({})
        .then(DS => res.render('DS', { DS: DS }))
        .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}
module.exports.mostrarH = (req, res) => {
    DS.find({})
        .then(DS => res.render('HDS', { DS: DS }))
        .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
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