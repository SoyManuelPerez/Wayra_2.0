const express = require('express')
const router = express.Router()

//Inicio Mesero
router.get('/HospedajeM',(req,res)=>{
    res.render('HospedajeM')
});
module.exports = router
