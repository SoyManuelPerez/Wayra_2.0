const express = require('express')
const router = express.Router()
const DS = require('../controllers/DS-1')
//Dias de sol 1
router.get('/DS-1',DS.mostrar,(req,res)=>{
    res.render('DS-1')
})
//Dias de sol 2
router.get('/DS-2',DS.mostrar,(req,res)=>{
    res.render('DS-2')
})
//Dias de sol 3
router.get('/DS-3',DS.mostrar,(req,res)=>{
    res.render('DS-3')
})
//Dias de sol 4
router.get('/DS-4',DS.mostrar,(req,res)=>{
    res.render('DS-4')
})
//Dias de sol 5
router.get('/DS-5',DS.mostrar,(req,res)=>{
    res.render('DS-5')
})
//Dias de sol 6
router.get('/DS-6',DS.mostrar,(req,res)=>{
    res.render('DS-6')
})

//Dias de sol 7
router.get('/DS-7',DS.mostrar,(req,res)=>{
    res.render('DS-7')
})
//Dias de sol 8
router.get('/DS-8',DS.mostrar,(req,res)=>{
    res.render('DS-8')
})
//Dias de sol 9
router.get('/DS-9',DS.mostrar,(req,res)=>{
    res.render('DS-9')
})

//Dias de sol 10
router.get('/DS-10',DS.mostrar,(req,res)=>{
    res.render('DS-10')
})

//Dias de sol 11
router.get('/DS-11',DS.mostrar,(req,res)=>{
    res.render('DS-11')
})

//Dias de sol 12
router.get('/DS-12',DS.mostrar,(req,res)=>{
    res.render('DS-12')
})

//Dias de sol 13
router.get('/DS-13',DS.mostrar,(req,res)=>{
    res.render('DS-13')
})

//Dias de sol 14
router.get('/DS-14',DS.mostrar,(req,res)=>{
    res.render('DS-14')
})

//Dias de sol 15
router.get('/DS-15',DS.mostrar,(req,res)=>{
    res.render('DS-15')
})

//Dias de sol 16
router.get('/DS-16',DS.mostrar,(req,res)=>{
    res.render('DS-16')
})

//Dias de sol 17
router.get('/DS-17',DS.mostrar,(req,res)=>{
    res.render('DS-17')
})

//Dias de sol 18
router.get('/DS-18',DS.mostrar,(req,res)=>{
    res.render('DS-18')
})

//Dias de sol 19
router.get('/DS-19',DS.mostrar,(req,res)=>{
    res.render('DS-19')
})

//Dias de sol 20
router.get('/DS-20',DS.mostrar,(req,res)=>{
    res.render('DS-20')
})
//Dias de sol 21
router.get('/DS-21',DS.mostrar,(req,res)=>{
    res.render('DS-21')
})
//Dias de sol 22
router.get('/DS-22',DS.mostrar,(req,res)=>{
    res.render('DS-22')
})
//Dias de sol 23
router.get('/DS-23',DS.mostrar,(req,res)=>{
    res.render('DS-23')
})
//Dias de sol 24
router.get('/DS-24',DS.mostrar,(req,res)=>{
    res.render('DS-24')
})
//Dias de sol 25
router.get('/DS-25',DS.mostrar,(req,res)=>{
    res.render('DS-25')
})
//Dias de sol 26
router.get('/DS-26',DS.mostrar,(req,res)=>{
    res.render('DS-26')
})
//Dias de sol 27
router.get('/DS-27',DS.mostrar,(req,res)=>{
    res.render('DS-27')
})
//Dias de sol 28
router.get('/DS-28',DS.mostrar,(req,res)=>{
    res.render('DS-28')
})
//Dias de sol 29
router.get('/DS-29',DS.mostrar,(req,res)=>{
    res.render('DS-29')
})
//Dias de sol 30
router.get('/DS-30',DS.mostrar,(req,res)=>{
    res.render('DS-30')
})
//Ingresar dias de sol
router.post('/IngresarDS',DS.agregar);
module.exports= router