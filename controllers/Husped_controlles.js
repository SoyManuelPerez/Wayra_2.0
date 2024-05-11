const Huesped = require('../models/Hospedaje')
//Mostrar Huesped
module.exports.mostrar = (req, res) => {
  Huesped.find({})
    .then(Huesped => res.render('huespedes', { Huesped: Huesped }))
    .catch(err => console.log(err, 'Error mostrar'))
}

module.exports.eliminar = (req, res) => {
  const id = req.params.id
  Huesped.findByIdAndDelete({ _id: id }).exec()
    .then(resultado => {
      console.log("Objeto eliminado : ", resultado);
    })
    .catch(error => {
      console.log(error)
    });
  res.redirect('/huespedes')
}
//Editar Producto
module.exports.editar = (req, res) => {

  const HB = req.body.Habitacion
  const Nombres = req.body.Nombre
  const Apellidos = req.body.Apellido
  const Tipo = req.body.tipo
  const Documento = req.body.Documento
  const Celular = req.body.Celular
  const Correo = req.body.Correo
  const Adultos = req.body.Adultos
  const Niños = req.body.Niños
  const Bebes = req.body.Bebes
  const Abono = req.body.Abono
  const Final = req.body.Pago
  const Ingreso = req.body.Fecha
  const Salida = req.body.Salida

  Huesped.findOneAndUpdate({ 
    $and: [
      { Documento: Documento.trim() },
      { HB: HB.trim() }
    ]
  }, { Nombres, Apellidos, Tipo,Celular,Correo,Adultos,Niños,Bebes,Abono,Final,Ingreso,Salida}).exec()
    .then(resultado => {
      console.log("Objeto Actualizado : ", resultado);
    })
    .catch(error => {
      console.log(error)
    })
  res.redirect('/huespedes')
}