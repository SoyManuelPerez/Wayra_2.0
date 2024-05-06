const DS = require('../models/DS')
const jsonwebtoken = require('jsonwebtoken')
const Usuario = require('../models/Usuarios')
//Mostrar productos
module.exports.mostrar = (req, res) => {
  const token = req.cookies.jwt;
  let mesero = "";
  if (token) {
    jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.send('Error al verificar el token.');
      }
      mesero = decoded.user;
    });
  } Promise.all([
    DS.find({}),
    Usuario.find({ user: mesero })
  ])
    .then(([DS, Usuario]) => {
      const tipoUsuario = Usuario.length > 0 ? Usuario[0].type : null;
      res.render('DS', { DS: DS, productos: Productos, tipoUsuario: tipoUsuario });
    })
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
  const newUsuario = new DS({ DS, Comanda, Nombres, Apellidos, Tipo, Documento, Abono, Final, Ingreso })
  console.log(newUsuario)
  await newUsuario.save()
  console.log('/' + DS)
  res.redirect('/' + DS)
}
module.exports.eliminar = (req, res) => {
  const id = req.params.id
  DS.findByIdAndDelete({ _id: id }).exec()
    .then(resultado => {
      console.log("Objeto eliminado : ", resultado);
    })
    .catch(error => {
      console.log(error)
    });
  res.redirect('/HDS')
}