const express = require('express')
const router = express.Router()
const Bar = require('../controllers/bar_controllers')
//mostrar tabla bar
router.get('/Bar',Bar.mostrar,(req,res)=>{
    res.render('bar')
})
//Devolver a la cuenta
router.get('/CuentaHB1/:id',Bar.Crear)

module.exports = router