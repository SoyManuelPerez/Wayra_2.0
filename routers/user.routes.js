const express = require('express')
const router = express.Router()
const Controllers_Usuario = require('../controllers/Controllers_Usuario')
//Mostrar Usuarios
router.get('/registro',Controllers_Usuario.mostrar,(req,res)=>{
    res.render('registro')
});
//Crear Usuarios
router.post('/CrearUsuario',Controllers_Usuario.Crear,);
//Login
router.get('/',(req,res)=>{
    res.render('login')
});
router.post('/loginValida',Controllers_Usuario.Login)
//Salir 
router.get('/logout',Controllers_Usuario.logout);
//Eliminar Usuario
router.get('/borrarUsuario/:id',Controllers_Usuario.eliminar)
//Actualizar
router.post('/editarUsuario',Controllers_Usuario.editar)

module.exports = router

