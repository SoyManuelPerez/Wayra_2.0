const express = require('express')
const router = express.Router()
const HB = require('../controllers/HB_1')
const ventas = require('../controllers/Ventas_controllers')
const Huesped = require('../controllers/Husped_controlles')
const Ds = require('../controllers/Ds_controllers')
const Pagos = require('../controllers/Controllers_pagos')
const Comisiones = require('../controllers/Comision')
//Editar Huespedes
router.post('/EditarIngreso',Huesped.editar)
//Editar DS
router.post('/EditarDS',Ds.editar)
//Ventas
router.get('/ventas',ventas.mostrar,(req,res)=>{
    res.render('Ventas')
})
//Ingreso
router.get('/Ingresos',Pagos.mostrar,(req,res)=>{
    res.render('ingreso')
})
router.get('/eliminarventas/:id',ventas.eliminar,(req,res)=>{
    res.render('Ventas')
})
//Inicio
router.get('/hospedaje',HB.mostrarH,(req,res)=>{
    res.render('hospedaje')
})
//Comisiones
router.get('/Comisiones',Comisiones.mostrar,(req,res)=>{
    res.render('Comisiones')
})
router.get('/eliminarComision/:id',Comisiones.eliminar,(req,res)=>{
    res.render('Ventas')
})
//Dias de sol
router.get('/DS',Ds.mostrar,(req,res)=>{
    res.render('DS')
})
router.get('/eliminarDS/:id',Ds.eliminar,(req,res)=>{
    res.render('HDS')
})
//Historial Ds
router.get('/HDS',Ds.mostrarH,(req,res)=>{
    res.render('HDS')
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
