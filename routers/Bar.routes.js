const express = require('express')
const router = express.Router()
const Bar = require('../controllers/bar_controllers')
//mostrar tabla bar
router.get('/Bar',Bar.mostrar,(req,res)=>{
    res.render('bar')
})
//Eliminar Bar
router.get('/eliminarDSTotal',Bar.eliminarDS);
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
//Devolver a la cuenta De HB13
router.get('/CuentaHB-14/:id',Bar.HB14)
//Devolver a la cuenta De HB13
router.get('/CuentaHB-15/:id',Bar.HB15)
//Devolver a la cuenta De CB14
router.get('/CuentaCB-26/:id',Bar.CB26)
//Devolver a la cuenta De CB15
router.get('/CuentaCB-27/:id',Bar.CB27)
//Devolver a la cuenta De CB16
router.get('/CuentaCB-28/:id',Bar.CB28)
//Devolver a la cuenta De CB17
router.get('/CuentaCB-29/:id',Bar.CB29)
//Devolver a la cuenta De CB18
router.get('/CuentaCB-30/:id',Bar.CB30)
//Devolver a la cuenta De CB19
router.get('/CuentaCB-31/:id',Bar.CB31)
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
//Entrantes
//Devolver a la cuenta De HB2
router.get('/CuentaEHB-1/:id',Bar.EHB1)
//Devolver a la cuenta De HB2
router.get('/CuentaEHB-2/:id',Bar.EHB2)
//Devolver a la cuenta De HB3
router.get('/CuentaEHB-3/:id',Bar.EHB3)
//Devolver a la cuenta De HB4
router.get('/CuentaEHB-4/:id',Bar.EHB4)
//Devolver a la cuenta De HB5
router.get('/CuentaEHB-5/:id',Bar.EHB5)
//Devolver a la cuenta De HB6
router.get('/CuentaEHB-6/:id',Bar.EHB6)
//Devolver a la cuenta De HB7
router.get('/CuentaEHB-7/:id',Bar.EHB7)
//Devolver a la cuenta De HB8
router.get('/CuentaEHB-8/:id',Bar.EHB8)
//Devolver a la cuenta De HB9
router.get('/CuentaEHB-9/:id',Bar.EHB9)
//Devolver a la cuenta De HB10
router.get('/CuentaEHB-10/:id',Bar.EHB10)
//Devolver a la cuenta De HB11
router.get('/CuentaEHB-11/:id',Bar.EHB11)
//Devolver a la cuenta De HB12
router.get('/CuentaEHB-12/:id',Bar.EHB12)
//Devolver a la cuenta De HB13
router.get('/CuentaEHB-13/:id',Bar.EHB13)
//Devolver a la cuenta De HB13
router.get('/CuentaEHB-14/:id',Bar.EHB14)
//Devolver a la cuenta De HB13
router.get('/CuentaEHB-15/:id',Bar.EHB15)
//Devolver a la cuenta De CB14
router.get('/CuentaECB-26/:id',Bar.ECB26)
//Devolver a la cuenta De CB15
router.get('/CuentaECB-27/:id',Bar.ECB27)
//Devolver a la cuenta De CB16
router.get('/CuentaECB-28/:id',Bar.ECB28)
//Devolver a la cuenta De CB17
router.get('/CuentaECB-29/:id',Bar.ECB29)
//Devolver a la cuenta De CB18
router.get('/CuentaECB-30/:id',Bar.ECB30)
//Devolver a la cuenta De CB19
router.get('/CuentaECB-31/:id',Bar.ECB31)
//Devolver a la cuenta De CB20
router.get('/CuentaECB-20/:id',Bar.ECB20)
//Devolver a la cuenta De CB21
router.get('/CuentaECB-21/:id',Bar.ECB21)
//Devolver a la cuenta De CB22
router.get('/CuentaECB-22/:id',Bar.ECB22)
//Devolver a la cuenta De CB23
router.get('/CuentaECB-23/:id',Bar.ECB23)
//Devolver a la cuenta De CB24
router.get('/CuentaECB-24/:id',Bar.ECB24)
//Devolver a la cuenta De CB25
router.get('/CuentaECB-25/:id',Bar.ECB25)
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
//DS-31
router.get('/CuentaDS-31/:id',Bar.DS31)
//DS-32
router.get('/CuentaDS-32/:id',Bar.DS32)
//DS-33
router.get('/CuentaDS-33/:id',Bar.DS33)
//DS-34
router.get('/CuentaDS-34/:id',Bar.DS34)
//DS-35
router.get('/CuentaDS-35/:id',Bar.DS35)
//DS-36
router.get('/CuentaDS-36/:id',Bar.DS36)
//DS-37
router.get('/CuentaDS-37/:id',Bar.DS37)
//DS-38
router.get('/CuentaDS-38/:id',Bar.DS38)
//DS-39
router.get('/CuentaDS-39/:id',Bar.DS39)
//DS-40
router.get('/CuentaDS-40/:id',Bar.DS40)
//DS-41
router.get('/CuentaDS-41/:id',Bar.DS41)
//DS-42
router.get('/CuentaDS-42/:id',Bar.DS42)
//DS-43
router.get('/CuentaDS-43/:id',Bar.DS43)
//DS-44
router.get('/CuentaDS-44/:id',Bar.DS44)
//DS-45
router.get('/CuentaDS-45/:id',Bar.DS45)
//DS-46
router.get('/CuentaDS-46/:id',Bar.DS46)
//DS-47
router.get('/CuentaDS-47/:id',Bar.DS47)
//DS-48
router.get('/CuentaDS-48/:id',Bar.DS48)
//DS-49
router.get('/CuentaDS-49/:id',Bar.DS49)
//DS-50
router.get('/CuentaDS-50/:id',Bar.DS50)
module.exports = router