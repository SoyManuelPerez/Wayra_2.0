const mongoose = require('mongoose')
const Comision = new mongoose.Schema ({
    Mesero: String,
    Coctel: Number,
    Vino: Number,
    Plato:Number,
})
module.exports = mongoose.model('Comision', Comision)