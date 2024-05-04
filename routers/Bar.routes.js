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
//Dias de sol
//DS-1
router.get('/CuentaDS-1/:id',Bar.DS1)
//DS-2
router.get('/CuentaDS-2/:id',Bar.DS2)
//DS-3
router.get('/CuentaDS-3/:id',Bar.DS3)
//DS-4
router.get('/CuentaDS-4/:id',Bar.DS4)
//DS-5
router.get('/CuentaDS-5/:id',Bar.DS5)
//DS-6
router.get('/CuentaDS-6/:id',Bar.DS6)
//DS-7
router.get('/CuentaDS-7/:id',Bar.DS7)
//DS-8
router.get('/CuentaDS-8/:id',Bar.DS8)
//DS-9
router.get('/CuentaDS-9/:id',Bar.DS9)
//DS-10
router.get('/CuentaDS-10/:id',Bar.DS10)
//DS-11
router.get('/CuentaDS-11/:id',Bar.DS11)
//DS-12
router.get('/CuentaDS-12/:id',Bar.DS12)
//DS-13
router.get('/CuentaDS-13/:id',Bar.DS13)
//DS-14
router.get('/CuentaDS-14/:id',Bar.DS14)
//DS-15
router.get('/CuentaDS-15/:id',Bar.DS15)
//DS-16
router.get('/CuentaDS-16/:id',Bar.DS16)
//DS-17
router.get('/CuentaDS-17/:id',Bar.DS17)
//DS-18
router.get('/CuentaDS-18/:id',Bar.DS18)
//DS-19
router.get('/CuentaDS-19/:id',Bar.DS19)
//DS-20
router.get('/CuentaDS-20/:id',Bar.DS20)
//DS-21
router.get('/CuentaDS-21/:id',Bar.DS21)
//DS-22
router.get('/CuentaDS-22/:id',Bar.DS22)
//DS-23
router.get('/CuentaDS-23/:id',Bar.DS23)
//DS-24
router.get('/CuentaDS-24/:id',Bar.DS24)
//DS-25
router.get('/CuentaDS-25/:id',Bar.DS25)
//DS-26
router.get('/CuentaDS-26/:id',Bar.DS26)
//DS-27
router.get('/CuentaDS-27/:id',Bar.DS27)
//DS-28
router.get('/CuentaDS-28/:id',Bar.DS28)
//DS-29
router.get('/CuentaDS-29/:id',Bar.DS29)
//DS-30
router.get('/CuentaDS-30/:id',Bar.DS30)

module.exports = router