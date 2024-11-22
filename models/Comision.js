const mongoose = require('mongoose')
const Comision = new mongoose.Schema ({
    Mesero: String,
    Coctel: Number,
    Vino: Number,
    Plato:Number,
    Fecha:String,
})
module.exports = mongoose.model('Comision', Comision)