const express = require('express')
const router = express.Router()
const Cocina = require('../controllers/Cocina_Controllers')
//mostrar tabla Cocina
router.get('/Cocina',Cocina.mostrar,(req,res)=>{
    res.render('Cocina')
})
//Eliminar
//Eliminar de la cuentaHB1
router.get('/eliminarCocina/:id',Cocina.eliminar);
//Devolver a la cuenta De HB1
router.get('/CuentaHB-1/:id',Cocina.HB1)
//Devolver a la cuenta De HB2
router.get('/CuentaHB-2/:id',Cocina.HB2)
//Devolver a la cuenta De HB3
router.get('/CuentaHB-3/:id',Cocina.HB3)
//Devolver a la cuenta De HB4
router.get('/CuentaHB-4/:id',Cocina.HB4)
//Devolver a la cuenta De HB5
router.get('/CuentaHB-5/:id',Cocina.HB5)
//Devolver a la cuenta De HB6
router.get('/CuentaHB-6/:id',Cocina.HB6)
//Devolver a la cuenta De HB7
router.get('/CuentaHB-7/:id',Cocina.HB7)
//Devolver a la cuenta De HB8
router.get('/CuentaHB-8/:id',Cocina.HB8)
//Devolver a la cuenta De HB9
router.get('/CuentaHB-9/:id',Cocina.HB9)
//Devolver a la cuenta De HB10
router.get('/CuentaHB-10/:id',Cocina.HB10)
//Devolver a la cuenta De HB11
router.get('/CuentaHB-11/:id',Cocina.HB11)
//Devolver a la cuenta De HB12
router.get('/CuentaHB-12/:id',Cocina.HB12)
//Devolver a la cuenta De HB13
router.get('/CuentaHB-13/:id',Cocina.HB13)
//Devolver a la cuenta De CB14
router.get('/CuentaCB-14/:id',Cocina.CB14)
//Devolver a la cuenta De CB15
router.get('/CuentaCB-15/:id',Cocina.CB15)
//Devolver a la cuenta De CB16
router.get('/CuentaCB-16/:id',Cocina.CB16)
//Devolver a la cuenta De CB17
router.get('/CuentaCB-17/:id',Cocina.CB17)
//Devolver a la cuenta De CB18
router.get('/CuentaCB-18/:id',Cocina.CB18)
//Devolver a la cuenta De CB19
router.get('/CuentaCB-19/:id',Cocina.CB19)
//Devolver a la cuenta De CB20
router.get('/CuentaCB-20/:id',Cocina.CB20)
//Devolver a la cuenta De CB21
router.get('/CuentaCB-21/:id',Cocina.CB21)
//Devolver a la cuenta De CB22
router.get('/CuentaCB-22/:id',Cocina.CB22)
//Devolver a la cuenta De CB23
router.get('/CuentaCB-23/:id',Cocina.CB23)
//Devolver a la cuenta De CB24
router.get('/CuentaCB-24/:id',Cocina.CB24)
//Devolver a la cuenta De CB25
router.get('/CuentaCB-25/:id',Cocina.CB25)
//Dias de sol
//DS-1
router.get('/CuentaDS-1/:id',Cocina.DS1)
//DS-2
router.get('/CuentaDS-2/:id',Cocina.DS2)
//DS-3
router.get('/CuentaDS-3/:id',Cocina.DS3)
//DS-4
router.get('/CuentaDS-4/:id',Cocina.DS4)
//DS-5
router.get('/CuentaDS-5/:id',Cocina.DS5)
//DS-6
router.get('/CuentaDS-6/:id',Cocina.DS6)
//DS-7
router.get('/CuentaDS-7/:id',Cocina.DS7)
//DS-8
router.get('/CuentaDS-8/:id',Cocina.DS8)
//DS-9
router.get('/CuentaDS-9/:id',Cocina.DS9)
//DS-10
router.get('/CuentaDS-10/:id',Cocina.DS10)
//DS-11
router.get('/CuentaDS-11/:id',Cocina.DS11)
//DS-12
router.get('/CuentaDS-12/:id',Cocina.DS12)
//DS-13
router.get('/CuentaDS-13/:id',Cocina.DS13)
//DS-14
router.get('/CuentaDS-14/:id',Cocina.DS14)
//DS-15
router.get('/CuentaDS-15/:id',Cocina.DS15)
//DS-16
router.get('/CuentaDS-16/:id',Cocina.DS16)
//DS-17
router.get('/CuentaDS-17/:id',Cocina.DS17)
//DS-18
router.get('/CuentaDS-18/:id',Cocina.DS18)
//DS-19
router.get('/CuentaDS-19/:id',Cocina.DS19)
//DS-20
router.get('/CuentaDS-20/:id',Cocina.DS20)
//DS-21
router.get('/CuentaDS-21/:id',Cocina.DS21)
//DS-22
router.get('/CuentaDS-22/:id',Cocina.DS22)
//DS-23
router.get('/CuentaDS-23/:id',Cocina.DS23)
//DS-24
router.get('/CuentaDS-24/:id',Cocina.DS24)
//DS-25
router.get('/CuentaDS-25/:id',Cocina.DS25)
//DS-26
router.get('/CuentaDS-26/:id',Cocina.DS26)
//DS-27
router.get('/CuentaDS-27/:id',Cocina.DS27)
//DS-28
router.get('/CuentaDS-28/:id',Cocina.DS28)
//DS-29
router.get('/CuentaDS-29/:id',Cocina.DS29)
//DS-30
router.get('/CuentaDS-30/:id',Cocina.DS30)


module.exports = router