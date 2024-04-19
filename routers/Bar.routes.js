const express = require('express')
const router = express.Router()
const Bar = require('../controllers/bar_controllers')
//mostrar tabla bar
router.get('/Bar',Bar.mostrar,(req,res)=>{
    res.render('bar')
})
//Eliminar
//Eliminar de la cuentaHB1
router.get('/eliminarBar/:id',Bar.eliminar);
//Devolver a la cuenta De HB1
router.get('/CuentaHB-1/:id',Bar.HB1)
//Devolver a la cuenta De HB2
router.get('/CuentaHB-2/:id',Bar.HB2)
//Devolver a la cuenta De HB3
router.get('/CuentaHB-3/:id',Bar.HB3)
//Devolver a la cuenta De HB4
router.get('/CuentaHB-4/:id',Bar.HB4)
//Devolver a la cuenta De HB5
router.get('/CuentaHB-5/:id',Bar.HB5)
//Devolver a la cuenta De HB6
router.get('/CuentaHB-6/:id',Bar.HB6)
//Devolver a la cuenta De HB7
router.get('/CuentaHB-7/:id',Bar.HB7)
//Devolver a la cuenta De HB8
router.get('/CuentaHB-8/:id',Bar.HB8)
//Devolver a la cuenta De HB9
router.get('/CuentaHB-9/:id',Bar.HB9)
//Devolver a la cuenta De HB10
router.get('/CuentaHB-10/:id',Bar.HB10)
//Devolver a la cuenta De HB11
router.get('/CuentaHB-11/:id',Bar.HB11)
//Devolver a la cuenta De HB12
router.get('/CuentaHB-12/:id',Bar.HB12)
//Devolver a la cuenta De HB13
router.get('/CuentaHB-13/:id',Bar.HB13)
//Devolver a la cuenta De CB14
router.get('/CuentaCB-14/:id',Bar.CB14)
//Devolver a la cuenta De CB15
router.get('/CuentaCB-15/:id',Bar.CB15)
//Devolver a la cuenta De CB16
router.get('/CuentaCB-16/:id',Bar.CB16)
//Devolver a la cuenta De CB17
router.get('/CuentaCB-17/:id',Bar.CB17)
//Devolver a la cuenta De CB18
router.get('/CuentaCB-18/:id',Bar.CB18)
//Devolver a la cuenta De CB19
router.get('/CuentaCB-19/:id',Bar.CB19)
//Devolver a la cuenta De CB20
router.get('/CuentaCB-20/:id',Bar.CB20)
//Devolver a la cuenta De CB21
router.get('/CuentaCB-21/:id',Bar.CB21)
//Devolver a la cuenta De CB22
router.get('/CuentaCB-22/:id',Bar.CB22)
//Devolver a la cuenta De CB23
router.get('/CuentaCB-23/:id',Bar.CB23)
//Devolver a la cuenta De CB24
router.get('/CuentaCB-24/:id',Bar.CB24)
//Devolver a la cuenta De CB25
router.get('/CuentaCB-25/:id',Bar.CB25)

module.exports = router