const express = require('express')
const router = express.Router()
const HB = require('../controllers/HB_1')
const Huesped = require('../controllers/Husped_controlles')
const Ds = require('../controllers/Ds_controllers')
//Inicio
router.get('/hospedaje',HB.mostrarH,(req,res)=>{
    res.render('hospedaje')
})
//Dias de sol
router.get('/DS',Ds.mostrar,(req,res)=>{
    res.render('DS')
})
//Huesped
router.get('/huespedes',Huesped.mostrar,(req,res)=>{
    res.render('huespedes')
})
//Huesped
router.get('/eliminarHuesped/:id',Huesped.eliminar,(req,res)=>{
    res.render('huespedes')
})

module.exports= router
