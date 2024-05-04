const express = require('express')
const router = express.Router()
const DS = require('../controllers/DS-1')
const Ds = require('../controllers/Ds_controllers')
const DS2 = require('../controllers/DS-2')
const DS3 = require('../controllers/DS-3')
const DS4 = require('../controllers/DS-4')
const DS5 = require('../controllers/DS-5')
const DS6 = require('../controllers/DS-6')
const DS7 = require('../controllers/DS-7')
const DS8 = require('../controllers/DS-8')
const DS9 = require('../controllers/DS-9')
const DS10 = require('../controllers/DS-10')
const DS11 = require('../controllers/DS-11')
const DS12 = require('../controllers/DS-12')
const DS13 = require('../controllers/DS-13')
const DS14 = require('../controllers/DS-14')
const DS15 = require('../controllers/DS-15')
const DS16 = require('../controllers/DS-16')
const DS17 = require('../controllers/DS-17')
const DS18 = require('../controllers/DS-18')
const DS19 = require('../controllers/DS-19')
const DS20 = require('../controllers/DS-20')
const DS21 = require('../controllers/DS-21')
const DS22 = require('../controllers/DS-22')
const DS23 = require('../controllers/DS-23')
const DS24 = require('../controllers/DS-24')
const DS25 = require('../controllers/DS-25')
const DS26 = require('../controllers/DS-26')
const DS27 = require('../controllers/DS-27')
const DS28 = require('../controllers/DS-28')
const DS29 = require('../controllers/DS-29')
const DS30 = require('../controllers/DS-30')

//Mostrar Dias de sol
//Dias de sol 1
router.get('/DS-1',DS.mostrar,(req,res)=>{
    res.render('DS-1')
})
//Dias de sol 2
router.get('/DS-2',DS2.mostrar,(req,res)=>{
    res.render('DS-2')
})
//Dias de sol 3
router.get('/DS-3',DS3.mostrar,(req,res)=>{
    res.render('DS-3')
})
//Dias de sol 4
router.get('/DS-4',DS4.mostrar,(req,res)=>{
    res.render('DS-4')
})
//Dias de sol 5
router.get('/DS-5',DS5.mostrar,(req,res)=>{
    res.render('DS-5')
})
//Dias de sol 6
router.get('/DS-6',DS6.mostrar,(req,res)=>{
    res.render('DS-6')
})
//Dias de sol 7
router.get('/DS-7',DS7.mostrar,(req,res)=>{
    res.render('DS-7')
})
//Dias de sol 8
router.get('/DS-8',DS8.mostrar,(req,res)=>{
    res.render('DS-8')
})
//Dias de sol 9
router.get('/DS-9',DS9.mostrar,(req,res)=>{
    res.render('DS-9')
})
//Dias de sol 10
router.get('/DS-10',DS10.mostrar,(req,res)=>{
    res.render('DS-10')
})
//Dias de sol 11
router.get('/DS-11',DS11.mostrar,(req,res)=>{
    res.render('DS-11')
})
//Dias de sol 12
router.get('/DS-12',DS12.mostrar,(req,res)=>{
    res.render('DS-12')
})
//Dias de sol 13
router.get('/DS-13',DS13.mostrar,(req,res)=>{
    res.render('DS-13')
})
//Dias de sol 14
router.get('/DS-14',DS14.mostrar,(req,res)=>{
    res.render('DS-14')
})
//Dias de sol 15
router.get('/DS-15',DS15.mostrar,(req,res)=>{
    res.render('DS-15')
})
//Dias de sol 16
router.get('/DS-16',DS16.mostrar,(req,res)=>{
    res.render('DS-16')
})
//Dias de sol 17
router.get('/DS-17',DS17.mostrar,(req,res)=>{
    res.render('DS-17')
})
//Dias de sol 18
router.get('/DS-18',DS18.mostrar,(req,res)=>{
    res.render('DS-18')
})
//Dias de sol 19
router.get('/DS-19',DS19.mostrar,(req,res)=>{
    res.render('DS-19')
})
//Dias de sol 20
router.get('/DS-20',DS20.mostrar,(req,res)=>{
    res.render('DS-20')
})
//Dias de sol 21
router.get('/DS-21',DS21.mostrar,(req,res)=>{
    res.render('DS-21')
})
//Dias de sol 22
router.get('/DS-22',DS22.mostrar,(req,res)=>{
    res.render('DS-22')
})
//Dias de sol 23
router.get('/DS-23',DS23.mostrar,(req,res)=>{
    res.render('DS-23')
})
//Dias de sol 24
router.get('/DS-24',DS24.mostrar,(req,res)=>{
    res.render('DS-24')
})
//Dias de sol 25
router.get('/DS-25',DS25.mostrar,(req,res)=>{
    res.render('DS-25')
})
//Dias de sol 26
router.get('/DS-26',DS26.mostrar,(req,res)=>{
    res.render('DS-26')
})
//Dias de sol 27
router.get('/DS-27',DS27.mostrar,(req,res)=>{
    res.render('DS-27')
})
//Dias de sol 28
router.get('/DS-28',DS28.mostrar,(req,res)=>{
    res.render('DS-28')
})
//Dias de sol 29
router.get('/DS-29',DS29.mostrar,(req,res)=>{
    res.render('DS-29')
})
//Dias de sol 30
router.get('/DS-30',DS30.mostrar,(req,res)=>{
    res.render('DS-30')
})

//Ingresar dias de sol
router.post('/IngresarDS',Ds.agregar);
//Ingresar dias de sol 2
router.post('/IngresarDS2',DS2.agregar);
//Ingresar dias de sol 3
router.post('/IngresarDS3',DS3.agregar);
//Ingresar dias de sol 4
router.post('/IngresarDS4',DS4.agregar);
//Ingresar dias de sol 5
router.post('/IngresarDS5',DS5.agregar);
//Ingresar dias de sol 6
router.post('/IngresarDS6',DS6.agregar);
//Ingresar dias de sol 7
router.post('/IngresarDS7',DS7.agregar);
//Ingresar dias de sol 8
router.post('/IngresarDS8',DS8.agregar);
//Ingresar dias de sol 9
router.post('/IngresarDS9',DS9.agregar);
//Ingresar dias de sol 10
router.post('/IngresarDS10',DS10.agregar);
//Ingresar dias de sol 11
router.post('/IngresarDS11',DS11.agregar);
//Ingresar dias de sol 12
router.post('/IngresarDS12',DS12.agregar);
//Ingresar dias de sol 13
router.post('/IngresarDS13',DS13.agregar);
//Ingresar dias de sol 14
router.post('/IngresarDS14',DS14.agregar);
//Ingresar dias de sol 15
router.post('/IngresarDS15',DS15.agregar);
//Ingresar dias de sol 16
router.post('/IngresarDS16',DS16.agregar);
//Ingresar dias de sol 17
router.post('/IngresarDS17',DS17.agregar);
//Ingresar dias de sol 18
router.post('/IngresarDS18',DS18.agregar);
//Ingresar dias de sol 19
router.post('/IngresarDS19',DS19.agregar);
//Ingresar dias de sol 20
router.post('/IngresarDS20',DS20.agregar);
//Ingresar dias de sol 21
router.post('/IngresarDS21',DS21.agregar);
//Ingresar dias de sol 22
router.post('/IngresarDS22',DS22.agregar);
//Ingresar dias de sol 23
router.post('/IngresarDS23',DS23.agregar);
//Ingresar dias de sol 24
router.post('/IngresarDS24',DS24.agregar);
//Ingresar dias de sol 25
router.post('/IngresarDS25',DS25.agregar);
//Ingresar dias de sol 26
router.post('/IngresarDS26',DS26.agregar);
//Ingresar dias de sol 27
router.post('/IngresarDS27',DS27.agregar);
//Ingresar dias de sol 28
router.post('/IngresarDS28',DS28.agregar);
//Ingresar dias de sol 29
router.post('/IngresarDS29',DS29.agregar);
//Ingresar dias de sol 30
router.post('/IngresarDS30',DS30.agregar);
// Pagar Dias de sol
//Pagar ds 1
router.get('/PagarDS1',DS.pagar);
//Pagar ds 2
router.get('/PagarDS2',DS2.pagar);
//Pagar ds 3
router.get('/PagarDS3',DS3.pagar);
//Pagar ds 4
router.get('/PagarDS4',DS4.pagar);
//Pagar ds 5
router.get('/PagarDS5',DS5.pagar);
//Pagar ds 6
router.get('/PagarDS6',DS6.pagar);
//Pagar ds 7
router.get('/PagarDS7',DS7.pagar);
//Pagar ds 8
router.get('/PagarDS8',DS8.pagar);
//Pagar ds 9
router.get('/PagarDS9',DS9.pagar);
//Pagar ds 10
router.get('/PagarDS10',DS10.pagar);
//Pagar ds 11
router.get('/PagarDS11',DS11.pagar);
//Pagar ds 12
router.get('/PagarDS12',DS12.pagar);
//Pagar ds 13
router.get('/PagarDS13',DS13.pagar);
//Pagar ds 14
router.get('/PagarDS14',DS14.pagar);
//Pagar ds 15
router.get('/PagarDS15',DS15.pagar);
//Pagar ds 16
router.get('/PagarDS16',DS16.pagar);
//Pagar ds 17
router.get('/PagarDS17',DS17.pagar);
//Pagar ds 18
router.get('/PagarDS18',DS18.pagar);
//Pagar ds 19
router.get('/PagarDS19',DS19.pagar);
//Pagar ds 20
router.get('/PagarDS20',DS20.pagar);
//Pagar ds 21
router.get('/PagarDS21',DS21.pagar);
//Pagar ds 22
router.get('/PagarDS22',DS22.pagar);
//Pagar ds 23
router.get('/PagarDS23',DS23.pagar);
//Pagar ds 24
router.get('/PagarDS24',DS24.pagar);
//Pagar ds 25
router.get('/PagarDS25',DS25.pagar);
//Pagar ds 26
router.get('/PagarDS26',DS26.pagar);
//Pagar ds 27
router.get('/PagarDS27',DS27.pagar);
//Pagar ds 28
router.get('/PagarDS28',DS28.pagar);
//Pagar ds 29
router.get('/PagarDS29',DS29.pagar);
//Pagar ds 30
router.get('/PagarDS30',DS30.pagar);
//Agregar a cuentas 
//Agregar a la cuenta Ds1
router.get('/AgregarDS1/:id',DS.Crear);
//Agregar a la cuenta Ds2
router.get('/AgregarDS2/:id',DS2.Crear);
//Agregar a la cuenta Ds3
router.get('/AgregarDS3/:id',DS3.Crear);
//Agregar a la cuenta Ds4
router.get('/AgregarDS4/:id',DS4.Crear);
//Agregar a la cuenta Ds5
router.get('/AgregarDS5/:id',DS5.Crear);
//Agregar a la cuenta Ds6
router.get('/AgregarDS6/:id',DS6.Crear);
//Agregar a la cuenta Ds7
router.get('/AgregarDS7/:id',DS7.Crear);
//Agregar a la cuenta Ds8
router.get('/AgregarDS8/:id',DS8.Crear);
//Agregar a la cuenta Ds9
router.get('/AgregarDS9/:id',DS9.Crear);
//Agregar a la cuenta Ds10
router.get('/AgregarDS10/:id',DS10.Crear);
//Agregar a la cuenta Ds11
router.get('/AgregarDS11/:id',DS11.Crear);
//Agregar a la cuenta Ds12
router.get('/AgregarDS12/:id',DS12.Crear);
//Agregar a la cuenta Ds13
router.get('/AgregarDS13/:id',DS13.Crear);
//Agregar a la cuenta Ds14
router.get('/AgregarDS14/:id',DS14.Crear);
//Agregar a la cuenta Ds15
router.get('/AgregarDS15/:id',DS15.Crear);
//Agregar a la cuenta Ds16
router.get('/AgregarDS16/:id',DS16.Crear);
//Agregar a la cuenta Ds17
router.get('/AgregarDS17/:id',DS17.Crear);
//Agregar a la cuenta Ds18
router.get('/AgregarDS18/:id',DS18.Crear);
//Agregar a la cuenta Ds19
router.get('/AgregarDS19/:id',DS19.Crear);
//Agregar a la cuenta Ds20
router.get('/AgregarDS20/:id',DS20.Crear);
//Agregar a la cuenta Ds21
router.get('/AgregarDS21/:id',DS21.Crear);
//Agregar a la cuenta Ds22
router.get('/AgregarDS22/:id',DS22.Crear);
//Agregar a la cuenta Ds23
router.get('/AgregarDS23/:id',DS23.Crear);
//Agregar a la cuenta Ds24
router.get('/AgregarDS24/:id',DS24.Crear);
//Agregar a la cuenta Ds25
router.get('/AgregarDS25/:id',DS25.Crear);
//Agregar a la cuenta Ds26
router.get('/AgregarDS26/:id',DS26.Crear);
//Agregar a la cuenta Ds27
router.get('/AgregarDS27/:id',DS27.Crear);
//Agregar a la cuenta Ds28
router.get('/AgregarDS28/:id',DS28.Crear);
//Agregar a la cuenta Ds29
router.get('/AgregarDS29/:id',DS29.Crear);
//Agregar a la cuenta Ds30
router.get('/AgregarDS30/:id',DS30.Crear);
//eliminar de la cuenta
//Eliminar de la cuentaDS-1
router.get('/eliminarDS-1/:id',DS.eliminar);
//Eliminar de la cuentaDS-2
router.get('/eliminarDS-2/:id',DS2.eliminar);
//Eliminar de la cuentaDS-3
router.get('/eliminarDS-3/:id',DS3.eliminar);
//Eliminar de la cuentaDS-4
router.get('/eliminarDS-4/:id',DS4.eliminar);
//Eliminar de la cuentaDS-5
router.get('/eliminarDS-5/:id',DS5.eliminar);
//Eliminar de la cuentaDS-6
router.get('/eliminarDS-6/:id',DS6.eliminar);
//Eliminar de la cuentaDS-7
router.get('/eliminarDS-7/:id',DS7.eliminar);
//Eliminar de la cuentaDS-8
router.get('/eliminarDS-8/:id',DS8.eliminar);
//Eliminar de la cuentaDS-9
router.get('/eliminarDS-9/:id',DS9.eliminar);
//Eliminar de la cuentaDS-10
router.get('/eliminarDS-10/:id',DS10.eliminar);
//Eliminar de la cuentaDS-11
router.get('/eliminarDS-11/:id',DS11.eliminar);
//Eliminar de la cuentaDS-12
router.get('/eliminarDS-12/:id',DS12.eliminar);
//Eliminar de la cuentaDS-13
router.get('/eliminarDS-13/:id',DS13.eliminar);
//Eliminar de la cuentaDS-14
router.get('/eliminarDS-14/:id',DS14.eliminar);
//Eliminar de la cuentaDS-15
router.get('/eliminarDS-15/:id',DS15.eliminar);
//Eliminar de la cuentaDS-16
router.get('/eliminarDS-16/:id',DS16.eliminar);
//Eliminar de la cuentaDS-17
router.get('/eliminarDS-17/:id',DS17.eliminar);
//Eliminar de la cuentaDS-18
router.get('/eliminarDS-18/:id',DS18.eliminar);
//Eliminar de la cuentaDS-19
router.get('/eliminarDS-19/:id',DS19.eliminar);
//Eliminar de la cuentaDS-20
router.get('/eliminarDS-20/:id',DS20.eliminar);
//Eliminar de la cuentaDS-21
router.get('/eliminarDS-21/:id',DS21.eliminar);
//Eliminar de la cuentaDS-22
router.get('/eliminarDS-22/:id',DS22.eliminar);
//Eliminar de la cuentaDS-23
router.get('/eliminarDS-23/:id',DS23.eliminar);
//Eliminar de la cuentaDS-24
router.get('/eliminarDS-24/:id',DS24.eliminar);
//Eliminar de la cuentaDS-25
router.get('/eliminarDS-25/:id',DS25.eliminar);
//Eliminar de la cuentaDS-26
router.get('/eliminarDS-26/:id',DS26.eliminar);
//Eliminar de la cuentaDS-27
router.get('/eliminarDS-27/:id',DS27.eliminar);
//Eliminar de la cuentaDS-28
router.get('/eliminarDS-28/:id',DS28.eliminar);
//Eliminar de la cuentaDS-29
router.get('/eliminarDS-29/:id',DS29.eliminar);
//Eliminar de la cuentaDS-30
router.get('/eliminarDS-30/:id',DS30.eliminar);

module.exports= router