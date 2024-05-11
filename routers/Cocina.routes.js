const express = require('express')
const router = express.Router()
const Cocina = require('../controllers/Cocina_Controllers')
//mostrar tabla Cocina
router.get('/Cocina',Cocina.mostrar,(req,res)=>{
    res.render('Cocina')
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
//Dias de sol
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


module.exports = router