const Ds = require('../models/DS')
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
    Ds.find({}),
    Usuario.find({ user: mesero })
  ])
    .then(([DS, Usuario]) => {
      const tipoUsuario = Usuario.length > 0 ? Usuario[0].type : null;
      res.render('DS', { DS: DS, productos: Productos, tipoUsuario: tipoUsuario });
    })
    .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}
module.exports.mostrarH = (req, res) => {
  Ds.find({})
    .then(DS => res.render('HDS', { DS: DS }))
    .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}
//Agregar al dia de sol
module.exports.agregar = async (req, res) => {
  const DS = req.body.DS
  const Comanda = req.body.Comanda
  const Nombre = req.body.Nombre
  const Adultos = req.body.Adultos
  const Niños = req.body.Niños
  const Bebes = req.body.Bebes
  const Ingreso = req.body.Fecha
  console.log(Ingreso)
  const newUsuario = new Ds({ DS, Comanda, Nombre,  Adultos, Niños, Bebes, Ingreso })
  console.log(newUsuario)
  await newUsuario.save()
  res.redirect('/'+DS)
}
module.exports.eliminar = (req, res) => {
  const id = req.params.id
  Ds.findByIdAndDelete({ _id: id }).exec()
    .then(resultado => {
      console.log("Objeto eliminado : ", resultado);
    })
    .catch(error => {
      console.log(error)
    });
  res.redirect('/HDS')
}
module.exports.editar = (req, res) => {

  const Comanda = req.body.Comanda
  const Nombre = req.body.Nombre
  const Adultos = req.body.Adultos
  const Niños = req.body.Niños
  const Bebes = req.body.Bebes
  const Ingreso = req.body.Fecha

Ds.findOneAndUpdate({ 
  $and: [
    { Comanda: Comanda.trim() }
    
  ]
}, { Comanda,Nombre,Adultos,Niños,Bebes,Ingreso}).exec()
  .then(resultado => {
    console.log("Objeto Actualizado : ", resultado);
  })
  .catch(error => {
    console.log(error)
  })

  res.redirect('/HDS')
}