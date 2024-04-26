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
//Ingresar dias de sol
router.post('/IngresarDS2',Ds.agregar);

module.exports= router