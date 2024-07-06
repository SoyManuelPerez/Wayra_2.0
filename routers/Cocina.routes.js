const express = require('express')
const router = express.Router()
const Cocina = require('../controllers/Cocina_Controllers')
//mostrar tabla Cocina
router.get('/Cocina',Cocina.mostrar,(req,res)=>{
    res.render('Cocina')
})
router.get('/Cenas',(req,res)=>{
    res.render('cenas')
})
//Eliminar
//Eliminar de la CCcuentaHB1
router.get('/eliminarCocina/:id',Cocina.eliminar);
//Devolver a la cuenta De HB1
router.get('/CCuentaHB-1/:id',Cocina.HB1)
//Devolver a la cuenta De HB2
router.get('/CCuentaHB-2/:id',Cocina.HB2)
//Devolver a la cuenta De HB3
router.get('/CCuentaHB-3/:id',Cocina.HB3)
//Devolver a la cuenta De HB4
router.get('/CCuentaHB-4/:id',Cocina.HB4)
//Devolver a la cuenta De HB5
router.get('/CCuentaHB-5/:id',Cocina.HB5)
//Devolver a la cuenta De HB6
router.get('/CCuentaHB-6/:id',Cocina.HB6)
//Devolver a la cuenta De HB7
router.get('/CCuentaHB-7/:id',Cocina.HB7)
//Devolver a la cuenta De HB8
router.get('/CCuentaHB-8/:id',Cocina.HB8)
//Devolver a la cuenta De HB9
router.get('/CCuentaHB-9/:id',Cocina.HB9)
//Devolver a la cuenta De HB10
router.get('/CCuentaHB-10/:id',Cocina.HB10)
//Devolver a la cuenta De HB11
router.get('/CCuentaHB-11/:id',Cocina.HB11)
//Devolver a la cuenta De HB12
router.get('/CCuentaHB-12/:id',Cocina.HB12)
//Devolver a la cuenta De HB13
router.get('/CCuentaHB-13/:id',Cocina.HB13)
//Devolver a la cuenta De CB14
router.get('/CCuentaCB-14/:id',Cocina.CB14)
//Devolver a la cuenta De CB15
router.get('/CCuentaCB-15/:id',Cocina.CB15)
//Devolver a la cuenta De CB16
router.get('/CCuentaCB-16/:id',Cocina.CB16)
//Devolver a la cuenta De CB17
router.get('/CCuentaCB-17/:id',Cocina.CB17)
//Devolver a la cuenta De CB18
router.get('/CCuentaCB-18/:id',Cocina.CB18)
//Devolver a la cuenta De CB19
router.get('/CCuentaCB-19/:id',Cocina.CB19)
//Devolver a la cuenta De CB20
router.get('/CCuentaCB-20/:id',Cocina.CB20)
//Devolver a la cuenta De CB21
router.get('/CCuentaCB-21/:id',Cocina.CB21)
//Devolver a la cuenta De CB22
router.get('/CCuentaCB-22/:id',Cocina.CB22)
//Devolver a la cuenta De CB23
router.get('/CCuentaCB-23/:id',Cocina.CB23)
//Devolver a la cuenta De CB24
router.get('/CCuentaCB-24/:id',Cocina.CB24)
//Devolver a la cuenta De CB25
router.get('/CCuentaCB-25/:id',Cocina.CB25)
//
//Entrante
//Devolver a la cuenta De HB1
router.get('/CCuentaEHB-1/:id',Cocina.EHB1)
//Devolver a la cuenta De HB2
router.get('/CCuentaEHB-2/:id',Cocina.EHB2)
//Devolver a la cuenta De HB3
router.get('/CCuentaEHB-3/:id',Cocina.EHB3)
//Devolver a la cuenta De HB4
router.get('/CCuentaEHB-4/:id',Cocina.EHB4)
//Devolver a la cuenta De HB5
router.get('/CCuentaEHB-5/:id',Cocina.EHB5)
//Devolver a la cuenta De HB6
router.get('/CCuentaEHB-6/:id',Cocina.EHB6)
//Devolver a la cuenta De HB7
router.get('/CCuentaEHB-7/:id',Cocina.EHB7)
//Devolver a la cuenta De HB8
router.get('/CCuentaEHB-8/:id',Cocina.EHB8)
//Devolver a la cuenta De HB9
router.get('/CCuentaEHB-9/:id',Cocina.EHB9)
//Devolver a la cuenta De HB10
router.get('/CCuentaEHB-10/:id',Cocina.EHB10)
//Devolver a la cuenta De HB11
router.get('/CCuentaEHB-11/:id',Cocina.EHB11)
//Devolver a la cuenta De HB12
router.get('/CCuentaEHB-12/:id',Cocina.EHB12)
//Devolver a la cuenta De HB13
router.get('/CCuentaEHB-13/:id',Cocina.EHB13)
//Devolver a la cuenta De CB14
router.get('/CCuentaECB-14/:id',Cocina.ECB14)
//Devolver a la cuenta De CB15
router.get('/CCuentaECB-15/:id',Cocina.ECB15)
//Devolver a la cuenta De CB16
router.get('/CCuentaECB-16/:id',Cocina.ECB16)
//Devolver a la cuenta De CB17
router.get('/CCuentaECB-17/:id',Cocina.ECB17)
//Devolver a la cuenta De CB18
router.get('/CCuentaECB-18/:id',Cocina.ECB18)
//Devolver a la cuenta De CB19
router.get('/CCuentaECB-19/:id',Cocina.ECB19)
//Devolver a la cuenta De CB20
router.get('/CCuentaECB-20/:id',Cocina.ECB20)
//Devolver a la cuenta De CB21
router.get('/CCuentaECB-21/:id',Cocina.ECB21)
//Devolver a la cuenta De CB22
router.get('/CCuentaECB-22/:id',Cocina.ECB22)
//Devolver a la cuenta De CB23
router.get('/CCuentaECB-23/:id',Cocina.ECB23)
//Devolver a la cuenta De CB24
router.get('/CCuentaECB-24/:id',Cocina.ECB24)
//Devolver a la cuenta De CB25
router.get('/CCuentaECB-25/:id',Cocina.ECB25)
//DS-1
router.get('/CCuentaDS-1/:id',Cocina.DS1)
//DS-2
router.get('/CCuentaDS-2/:id',Cocina.DS2)
//DS-3
router.get('/CCuentaDS-3/:id',Cocina.DS3)
//DS-4
router.get('/CCuentaDS-4/:id',Cocina.DS4)
//DS-5
router.get('/CCuentaDS-5/:id',Cocina.DS5)
//DS-6
router.get('/CCuentaDS-6/:id',Cocina.DS6)
//DS-7
router.get('/CCuentaDS-7/:id',Cocina.DS7)
//DS-8
router.get('/CCuentaDS-8/:id',Cocina.DS8)
//DS-9
router.get('/CCuentaDS-9/:id',Cocina.DS9)
//DS-10
router.get('/CCuentaDS-10/:id',Cocina.DS10)
//DS-11
router.get('/CCuentaDS-11/:id',Cocina.DS11)
//DS-12
router.get('/CCuentaDS-12/:id',Cocina.DS12)
//DS-13
router.get('/CCuentaDS-13/:id',Cocina.DS13)
//DS-14
router.get('/CCuentaDS-14/:id',Cocina.DS14)
//DS-15
router.get('/CCuentaDS-15/:id',Cocina.DS15)
//DS-16
router.get('/CCuentaDS-16/:id',Cocina.DS16)
//DS-17
router.get('/CCuentaDS-17/:id',Cocina.DS17)
//DS-18
router.get('/CCuentaDS-18/:id',Cocina.DS18)
//DS-19
router.get('/CCuentaDS-19/:id',Cocina.DS19)
//DS-20
router.get('/CCuentaDS-20/:id',Cocina.DS20)
//DS-21
router.get('/CCuentaDS-21/:id',Cocina.DS21)
//DS-22
router.get('/CCuentaDS-22/:id',Cocina.DS22)
//DS-23
router.get('/CCuentaDS-23/:id',Cocina.DS23)
//DS-24
router.get('/CCuentaDS-24/:id',Cocina.DS24)
//DS-25
router.get('/CCuentaDS-25/:id',Cocina.DS25)
//DS-26
router.get('/CCuentaDS-26/:id',Cocina.DS26)
//DS-27
router.get('/CCuentaDS-27/:id',Cocina.DS27)
//DS-28
router.get('/CCuentaDS-28/:id',Cocina.DS28)
//DS-29
router.get('/CCuentaDS-29/:id',Cocina.DS29)
//DS-30
router.get('/CCuentaDS-30/:id',Cocina.DS30)
//DS-31
router.get('/CCuentaDS-31/:id',Cocina.DS31)
//DS-32
router.get('/CCuentaDS-32/:id',Cocina.DS32)
//DS-33
router.get('/CCuentaDS-33/:id',Cocina.DS33)
//DS-34
router.get('/CCuentaDS-34/:id',Cocina.DS34)
//DS-35
router.get('/CCuentaDS-35/:id',Cocina.DS35)
//DS-36
router.get('/CCuentaDS-36/:id',Cocina.DS36)
//DS-37
router.get('/CCuentaDS-37/:id',Cocina.DS37)
//DS-38
router.get('/CCuentaDS-38/:id',Cocina.DS38)
//DS-39
router.get('/CCuentaDS-39/:id',Cocina.DS39)
//DS-40
router.get('/CCuentaDS-40/:id',Cocina.DS40)
//DS-41
router.get('/CCuentaDS-41/:id',Cocina.DS41)
//DS-42
router.get('/CCuentaDS-42/:id',Cocina.DS42)
//DS-43
router.get('/CCuentaDS-43/:id',Cocina.DS43)
//DS-44
router.get('/CCuentaDS-44/:id',Cocina.DS44)
//DS-45
router.get('/CCuentaDS-45/:id',Cocina.DS45)
//DS-46
router.get('/CCuentaDS-46/:id',Cocina.DS46)
//DS-47
router.get('/CCuentaDS-47/:id',Cocina.DS47)
//DS-48
router.get('/CCuentaDS-48/:id',Cocina.DS48)
//DS-49
router.get('/CCuentaDS-49/:id',Cocina.DS49)
//DS-50
router.get('/CCuentaDS-50/:id',Cocina.DS50)

module.exports = router