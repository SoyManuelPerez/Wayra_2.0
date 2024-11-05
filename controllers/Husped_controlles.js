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

  const HB = req.body.Habitacion.trim();
  const Nombre = req.body.Nombre;
  const Adultos = req.body.Adultos; 
  const Niños = req.body.Niños;
  const Bebes = req.body.Bebes;
  const Ingreso = req.body.Fecha;
  const Salida = req.body.Salida;

  Huesped.findOneAndUpdate(
    { HB }, 
    { Nombre, Adultos, Niños, Bebes, Ingreso, Salida } 
  ).exec()
    .then(resultado => {
      console.log("Objeto Actualizado: ", resultado);
      res.redirect('/huespedes'); 
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Error al actualizar el huésped");
    });
};
