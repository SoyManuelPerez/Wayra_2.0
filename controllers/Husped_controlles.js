const Huesped = require('../models/Hospedaje')
//Mostrar Huesped
module.exports.mostrar = (req, res) => {
  Huesped.find({})
    .then(Huesped => res.render('huespedes', { Huesped: Huesped }))
    .catch(err => console.log(err, 'Error mostrar'))
}

//Guardar Huesped
module.exports.Crear = async (req, res) => {
  const { Producto, Precio, Cantidad, Tipo } = req.body
  console.log(req.body)
  const newProducto = new Huesped({ Producto, Precio, Cantidad, Tipo })
  await newProducto.save()
  res.redirect('/huespedes')
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
  const producto = req.body.ProductoE
  const Tipo = req.body.TipoE
  const Cantidad = req.body.CantidadE
  const Precio = req.body.PrecioE
  console.log(Cantidad)
  Huesped.findOneAndUpdate({ Producto: producto.trim() }, { Precio, Cantidad, Tipo }).exec()
    .then(resultado => {
      console.log("Objeto Actualizado : ", resultado);
    })
    .catch(error => {
      console.log(error)
    })
  res.redirect('/huespedes')
}