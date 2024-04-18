const express = require('express')
const router = express.Router()
const HB = require('../controllers/HB_1')
const HB2 = require('../controllers/HB_2')
router.get('/hospedaje',(req,res)=>{
    res.render('hospedaje')
})
//HB1
router.get('/HB-1',HB.mostrar,(req,res)=>{
    res.render('HB-1')
})
//Agregar a la cuenta HB1
router.get('/AgregarHB1/:id',HB.Crear);
//Eliminar de la cuentaHB1
router.get('/eliminarHB1/:id',HB.eliminar);

//HB2
router.get('/HB-2',HB2.mostrar,(req,res)=>{
    res.render('HB-2')
})
////Agregar a la cuenta HB1
router.get('/AgregarHB2/:id',HB2.Crear);
module.exports= router
