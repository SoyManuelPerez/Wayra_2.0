const express = require('express')
const router = express.Router()
const HB = require('../controllers/HB_1')
const Bar = require('../controllers/bar_controllers')
router.get('/hospedaje',(req,res)=>{
    res.render('hospedaje')
})
router.get('/HB-1',HB.mostrar,(req,res)=>{
    res.render('HB-1')
})
//Agregar a la cuenta
router.get('/AgregarHB1/:id',HB.Crear);
//Eliminar de la cuenta
router.get('/eliminarHB1/:id',HB.eliminar);
//mostrar tabla bar
router.get('/Bar',Bar.mostrar,(req,res)=>{
    res.render('bar')
})
//Devolver a la cuenta
router.get('/CuentaHB1/:id',Bar.Crear)
module.exports = router
