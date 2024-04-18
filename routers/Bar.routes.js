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

module.exports = router