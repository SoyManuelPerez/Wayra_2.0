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


module.exports = router