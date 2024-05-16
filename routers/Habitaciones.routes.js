const express = require('express')
const router = express.Router()
const HB = require('../controllers/HB_1')
const HB2 = require('../controllers/HB_2')
const HB3 = require('../controllers/HB_3')
const HB4 = require('../controllers/HB_4')
const HB5 = require('../controllers/HB_5')
const HB6 = require('../controllers/HB_6')
const HB7 = require('../controllers/HB_7')
const HB8 = require('../controllers/HB_8')
const HB9 = require('../controllers/HB_9')
const HB10 = require('../controllers/HB_10')
const HB11 = require('../controllers/HB_11')
const HB12 = require('../controllers/HB_12')
const HB13 = require('../controllers/HB_13')
const CB14 = require('../controllers/CB_14')
const CB15 = require('../controllers/CB_15')
const CB16 = require('../controllers/CB_16')
const CB17 = require('../controllers/CB_17')
const CB18 = require('../controllers/CB_18')
const CB19 = require('../controllers/CB_19')
const CB20 = require('../controllers/CB_20')
const CB21 = require('../controllers/CB_21')
const CB22 = require('../controllers/CB_22')
const CB23 = require('../controllers/CB_23')
const CB24 = require('../controllers/CB_24')
const CB25 = require('../controllers/CB_25')

//HB1
router.get('/HB-1',HB.mostrar,(req,res)=>{
    res.render('HB-1')
})
//Agregar a la cuenta HB1
router.get('/AgregarHB1/:id',HB.Crear);
//Eliminar de la cuentaHB1
router.get('/eliminarHB1/:id',HB.eliminar);
//HB2
router.get('/HB-2',HB2.mostrar,(req,res)=>{
    res.render('HB-2')
})
////Agregar a la cuenta HB2
router.get('/AgregarHB2/:id',HB2.Crear);
//Eliminar de la cuentaHB1
router.get('/eliminarHB2/:id',HB2.eliminar);

//HB3
router.get('/HB-3',HB3.mostrar,(req,res)=>{
    res.render('HB-3')
})
////Agregar a la cuenta HB3
router.get('/AgregarHB3/:id',HB3.Crear);
//Eliminar de la cuentaHB3
router.get('/eliminarHB3/:id',HB3.eliminar);
//HB4
router.get('/HB-4',HB4.mostrar,(req,res)=>{
    res.render('HB-4')
})
////Agregar a la cuenta HB4
router.get('/AgregarHB4/:id',HB4.Crear);
//Eliminar de la cuentaHB4
router.get('/eliminarHB4/:id',HB4.eliminar);
//HB5
router.get('/HB-5',HB5.mostrar,(req,res)=>{
    res.render('HB-5')
})
////Agregar a la cuenta HB5
router.get('/AgregarHB5/:id',HB5.Crear);
//Eliminar de la cuentaHB5
router.get('/eliminarHB5/:id',HB5.eliminar);
//HB6
router.get('/HB-6',HB6.mostrar,(req,res)=>{
    res.render('HB-6')
})
////Agregar a la cuenta HB6
router.get('/AgregarHB6/:id',HB6.Crear);
//Eliminar de la cuentaHB6
router.get('/eliminarHB6/:id',HB6.eliminar);
//HB7
router.get('/HB-7',HB7.mostrar,(req,res)=>{
    res.render('HB-7')
})
////Agregar a la cuenta HB7
router.get('/AgregarHB7/:id',HB7.Crear);
//Eliminar de la cuentaHB7
router.get('/eliminarHB7/:id',HB7.eliminar);
//HB8
router.get('/HB-8',HB8.mostrar,(req,res)=>{
    res.render('HB-8')
})
////Agregar a la cuenta HB8
router.get('/AgregarHB8/:id',HB8.Crear);
//Eliminar de la cuentaHB8
router.get('/eliminarHB8/:id',HB8.eliminar);
//HB9
router.get('/HB-9',HB9.mostrar,(req,res)=>{
    res.render('HB-9')
})
////Agregar a la cuenta HB9
router.get('/AgregarHB9/:id',HB9.Crear);
//Eliminar de la cuentaHB9
router.get('/eliminarHB9/:id',HB9.eliminar);
//HB10
router.get('/HB-10',HB10.mostrar,(req,res)=>{
    res.render('HB-10')
})
////Agregar a la cuenta HB10
router.get('/AgregarHB10/:id',HB10.Crear);
//Eliminar de la cuentaHB10
router.get('/eliminarHB10/:id',HB10.eliminar);

//HB11
router.get('/HB-11',HB11.mostrar,(req,res)=>{
    res.render('HB-11')
})
////Agregar a la cuenta HB11
router.get('/AgregarHB11/:id',HB11.Crear);
//Eliminar de la cuentaHB11
router.get('/eliminarHB11/:id',HB11.eliminar);

//HB12
router.get('/HB-12',HB12.mostrar,(req,res)=>{
    res.render('HB-12')
})
////Agregar a la cuenta HB12
router.get('/AgregarHB12/:id',HB12.Crear);
//Eliminar de la cuentaHB12
router.get('/eliminarHB12/:id',HB12.eliminar);

//HB13
router.get('/HB-13',HB13.mostrar,(req,res)=>{
    res.render('HB-13')
})
////Agregar a la cuenta HB13
router.get('/AgregarHB13/:id',HB13.Crear);
//Eliminar de la cuentaHB13
router.get('/eliminarHB13/:id',HB13.eliminar);

//CB14
router.get('/CB-14',CB14.mostrar,(req,res)=>{
    res.render('CB-14')
})
////Agregar a la cuenta CB14
router.get('/AgregarCB14/:id',CB14.Crear);
//Eliminar de la cuentaCB14
router.get('/eliminarCB14/:id',CB14.eliminar);

//CB15
router.get('/CB-15',CB15.mostrar,(req,res)=>{
    res.render('CB-15')
})
////Agregar a la cuenta CB15
router.get('/AgregarCB15/:id',CB15.Crear);
//Eliminar de la cuentaCB15
router.get('/eliminarCB15/:id',CB15.eliminar);

//CB16
router.get('/CB-16',CB16.mostrar,(req,res)=>{
    res.render('CB-16')
})
////Agregar a la cuenta CB16
router.get('/AgregarCB16/:id',CB16.Crear);
//Eliminar de la cuentaCB16
router.get('/eliminarCB16/:id',CB16.eliminar);

//CB17
router.get('/CB-17',CB17.mostrar,(req,res)=>{
    res.render('CB-17')
})
////Agregar a la cuenta CB17
router.get('/AgregarCB17/:id',CB17.Crear);
//Eliminar de la cuentaCB17
router.get('/eliminarCB17/:id',CB17.eliminar);

//CB18
router.get('/CB-18',CB18.mostrar,(req,res)=>{
    res.render('CB-18')
})
////Agregar a la cuenta CB18
router.get('/AgregarCB18/:id',CB18.Crear);
//Eliminar de la cuentaCB18
router.get('/eliminarCB18/:id',CB18.eliminar);

//CB19
router.get('/CB-19',CB19.mostrar,(req,res)=>{
    res.render('CB-19')
})
////Agregar a la cuenta CB19
router.get('/AgregarCB19/:id',CB19.Crear);
//Eliminar de la cuentaCB19
router.get('/eliminarCB19/:id',CB19.eliminar);

//CB20
router.get('/CB-20',CB20.mostrar,(req,res)=>{
    res.render('CB-20')
})
////Agregar a la cuenta CB20
router.get('/AgregarCB20/:id',CB20.Crear);
//Eliminar de la cuentaCB20
router.get('/eliminarCB20/:id',CB20.eliminar);

//CB21
router.get('/CB-21',CB21.mostrar,(req,res)=>{
    res.render('CB-21')
})
////Agregar a la cuenta CB21
router.get('/AgregarCB21/:id',CB21.Crear);
//Eliminar de la cuentaCB21
router.get('/eliminarCB21/:id',CB21.eliminar);

//CB22
router.get('/CB-22',CB22.mostrar,(req,res)=>{
    res.render('CB-22')
})
////Agregar a la cuenta CB22
router.get('/AgregarCB22/:id',CB22.Crear);
//Eliminar de la cuentaCB22
router.get('/eliminarCB22/:id',CB22.eliminar);

//CB23
router.get('/CB-23',CB23.mostrar,(req,res)=>{
    res.render('CB-23')
})
////Agregar a la cuenta CB23
router.get('/AgregarCB23/:id',CB23.Crear);
//Eliminar de la cuentaCB23
router.get('/eliminarCB23/:id',CB23.eliminar);

//CB24
router.get('/CB-24',CB23.mostrar,(req,res)=>{
    res.render('CB-24')
})
////Agregar a la cuenta CB24
router.get('/AgregarCB24/:id',CB23.Crear);
//Eliminar de la cuentaCB24
router.get('/eliminarCB24/:id',CB24.eliminar);
//CB25
router.get('/CB-25',CB25.mostrar,(req,res)=>{
    res.render('CB-25')
})
////Agregar a la cuenta CB25
router.get('/AgregarCB25/:id',CB25.Crear);
//Eliminar de la cuentaCB25
router.get('/eliminarCB25/:id',CB25.eliminar);
//Agregar Huesped
router.post('/IngresarCliente',HB.agregar);
router.post('/IngresarCliente2',HB2.agregar);
router.post('/IngresarCliente3',HB3.agregar);
router.post('/IngresarCliente4',HB4.agregar);
router.post('/IngresarCliente5',HB5.agregar);
router.post('/IngresarCliente6',HB6.agregar);
router.post('/IngresarCliente7',HB7.agregar);
router.post('/IngresarCliente8',HB8.agregar);
router.post('/IngresarCliente9',HB9.agregar);
router.post('/IngresarCliente10',HB10.agregar);
router.post('/IngresarCliente11',HB11.agregar);
router.post('/IngresarCliente12',HB12.agregar);
router.post('/IngresarCliente13',HB13.agregar);
router.post('/IngresarCliente14',CB14.agregar);
router.post('/IngresarCliente15',CB15.agregar);
router.post('/IngresarCliente16',CB16.agregar);
router.post('/IngresarCliente17',CB17.agregar);
router.post('/IngresarCliente18',CB18.agregar);
router.post('/IngresarCliente19',CB19.agregar);
router.post('/IngresarCliente20',CB20.agregar);
router.post('/IngresarCliente21',CB21.agregar);
router.post('/IngresarCliente22',CB22.agregar);
router.post('/IngresarCliente23',CB23.agregar);
router.post('/IngresarCliente24',CB24.agregar);
router.post('/IngresarCliente25',CB25.agregar);

//Pagar HB1
router.post('/PagarHB',HB.pagar);
//Pagar HB2
router.get('/PagarHB2',HB2.pagar);
//Pagar HB3
router.get('/PagarHB3',HB3.pagar);
//Pagar HB4
router.get('/PagarHB4',HB4.pagar);
//Pagar HB5
router.get('/PagarHB5',HB5.pagar);
//Pagar HB6
router.get('/PagarHB6',HB6.pagar);
//Pagar HB7
router.get('/PagarHB7',HB7.pagar);
//Pagar HB8
router.get('/PagarHB8',HB8.pagar);
//Pagar HB9
router.get('/PagarHB9',HB9.pagar);
//Pagar HB10
router.get('/PagarHB10',HB10.pagar);
//Pagar HB11
router.get('/PagarHB11',HB11.pagar);
//Pagar HB12
router.get('/PagarHB12',HB12.pagar);
//Pagar HB13
router.get('/PagarHB13',HB13.pagar);
//Pagar CB14
router.get('/PagarCB14',CB14.pagar);
//Pagar CB15
router.get('/PagarCB15',CB15.pagar);
//Pagar CB16
router.get('/PagarCB16',CB16.pagar);
//Pagar CB17
router.get('/PagarCB17',CB17.pagar);
//Pagar CB18
router.get('/PagarCB18',CB18.pagar);
//Pagar CB19
router.get('/PagarCB19',CB19.pagar);
//Pagar CB20
router.get('/PagarCB20',CB20.pagar);
//Pagar CB21
router.get('/PagarCB21',CB21.pagar);
//Pagar CB22
router.get('/PagarCB22',CB22.pagar);
//Pagar CB23
router.get('/PagarCB23',CB23.pagar);
//Pagar CB24
router.get('/PagarCB24',CB24.pagar);
//Pagar CB25
router.get('/PagarCB25',CB25.pagar);

module.exports= router