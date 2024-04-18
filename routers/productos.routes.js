const express = require('express')
const router = express.Router()
const Porductos = require('../controllers/Controllers_producto')
//Mostrar Usuarios
router.get('/productos',Porductos.mostrar,(req,res)=>{
    res.render('Producto')
});
// //Crear Producto
 router.post('/CrearProducto',Porductos.Crear,);
//Eliminar Usuario
router.get('/borrarProducto/:id',Porductos.eliminar);
// //Actualizar
router.post('/editarProducto',Porductos.editar);
module.exports = router
