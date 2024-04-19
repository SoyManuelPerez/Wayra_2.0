const express = require('express')
const router = express.Router()
const HB = require('../controllers/HB_1')
const HB2 = require('../controllers/HB_2')
const HB3 = require('../controllers/HB_3')
const HB4 = require('../controllers/HB_4')
const HB5 = require('../controllers/HB_5')
const HB6 = require('../controllers/HB_6')
const HB7 = require('../controllers/HB_7')
const HB8 = require('../controllers/HB_8')
const HB9 = require('../controllers/HB_9')
const HB10 = require('../controllers/HB_10')
const HB11 = require('../controllers/HB_11')
const HB12 = require('../controllers/HB_12')
const HB13 = require('../controllers/HB_13')

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
////Agregar a la cuenta HB2
router.get('/AgregarHB2/:id',HB2.Crear);
//Eliminar de la cuentaHB1
router.get('/eliminarHB2/:id',HB2.eliminar);

//HB3
router.get('/HB-3',HB3.mostrar,(req,res)=>{
    res.render('HB-3')
})
////Agregar a la cuenta HB3
router.get('/AgregarHB3/:id',HB3.Crear);
//Eliminar de la cuentaHB3
router.get('/eliminarHB3/:id',HB3.eliminar);
//HB4
router.get('/HB-4',HB4.mostrar,(req,res)=>{
    res.render('HB-4')
})
////Agregar a la cuenta HB4
router.get('/AgregarHB4/:id',HB4.Crear);
//Eliminar de la cuentaHB4
router.get('/eliminarHB4/:id',HB4.eliminar);
//HB5
router.get('/HB-5',HB5.mostrar,(req,res)=>{
    res.render('HB-5')
})
////Agregar a la cuenta HB5
router.get('/AgregarHB5/:id',HB5.Crear);
//Eliminar de la cuentaHB5
router.get('/eliminarHB5/:id',HB5.eliminar);
//HB6
router.get('/HB-6',HB6.mostrar,(req,res)=>{
    res.render('HB-6')
})
////Agregar a la cuenta HB6
router.get('/AgregarHB6/:id',HB6.Crear);
//Eliminar de la cuentaHB6
router.get('/eliminarHB6/:id',HB6.eliminar);
//HB7
router.get('/HB-7',HB7.mostrar,(req,res)=>{
    res.render('HB-7')
})
////Agregar a la cuenta HB7
router.get('/AgregarHB7/:id',HB7.Crear);
//Eliminar de la cuentaHB7
router.get('/eliminarHB7/:id',HB7.eliminar);
//HB8
router.get('/HB-8',HB8.mostrar,(req,res)=>{
    res.render('HB-8')
})
////Agregar a la cuenta HB8
router.get('/AgregarHB8/:id',HB8.Crear);
//Eliminar de la cuentaHB8
router.get('/eliminarHB8/:id',HB8.eliminar);
//HB9
router.get('/HB-9',HB9.mostrar,(req,res)=>{
    res.render('HB-9')
})
////Agregar a la cuenta HB9
router.get('/AgregarHB9/:id',HB9.Crear);
//Eliminar de la cuentaHB9
router.get('/eliminarHB9/:id',HB9.eliminar);
//HB10
router.get('/HB-10',HB10.mostrar,(req,res)=>{
    res.render('HB-10')
})
////Agregar a la cuenta HB10
router.get('/AgregarHB10/:id',HB10.Crear);
//Eliminar de la cuentaHB10
router.get('/eliminarHB10/:id',HB10.eliminar);

//HB11
router.get('/HB-11',HB11.mostrar,(req,res)=>{
    res.render('HB-11')
})
////Agregar a la cuenta HB11
router.get('/AgregarHB11/:id',HB11.Crear);
//Eliminar de la cuentaHB11
router.get('/eliminarHB11/:id',HB11.eliminar);

//HB12
router.get('/HB-12',HB12.mostrar,(req,res)=>{
    res.render('HB-12')
})
////Agregar a la cuenta HB12
router.get('/AgregarHB12/:id',HB12.Crear);
//Eliminar de la cuentaHB12
router.get('/eliminarHB12/:id',HB12.eliminar);

//HB13
router.get('/HB-13',HB13.mostrar,(req,res)=>{
    res.render('HB-13')
})
////Agregar a la cuenta HB13
router.get('/AgregarHB13/:id',HB13.Crear);
//Eliminar de la cuentaHB13
router.get('/eliminarHB13/:id',HB13.eliminar);

module.exports= router
