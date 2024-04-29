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
module.exports= router
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

module.exports= router