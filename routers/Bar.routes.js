const express = require('express')
const router = express.Router()
const Bar = require('../controllers/bar_controllers')
//mostrar tabla bar
router.get('/Bar',Bar.mostrar,(req,res)=>{
    res.render('bar')
})
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


module.exports = router