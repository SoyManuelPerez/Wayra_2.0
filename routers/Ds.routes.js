const express = require('express')
const router = express.Router()
const DS = require('../controllers/DS-1')
//Dias de sol 1
router.get('/DS-1',DS.mostrar,(req,res)=>{
    res.render('DS-1')
})
router.post('/IngresarDS',DS.agregar);
module.exports= router