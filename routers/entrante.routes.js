const express = require('express')
const router = express.Router()
const HB = require('../controllers/EHB_1')
const HB2 = require('../controllers/EHB_2')
const HB3 = require('../controllers/EHB_3')
const HB4 = require('../controllers/EHB_4')
const HB5 = require('../controllers/EHB_5')
const HB6 = require('../controllers/EHB_6')
const HB7 = require('../controllers/EHB_7')
const HB8 = require('../controllers/EHB_8')
const HB9 = require('../controllers/EHB_9')
const HB10 = require('../controllers/EHB_10')
const HB11 = require('../controllers/EHB_11')
const HB12 = require('../controllers/EHB_12')
const HB13 = require('../controllers/EHB_13')
const CB14 = require('../controllers/ECB_14')
const CB15 = require('../controllers/ECB_15')
const CB16 = require('../controllers/ECB_16')
const CB17 = require('../controllers/ECB_17')
const CB18 = require('../controllers/ECB_18')
const CB19 = require('../controllers/ECB_19')
const CB20 = require('../controllers/ECB_20')
const CB21 = require('../controllers/ECB_21')
const CB22 = require('../controllers/ECB_22')
const CB23 = require('../controllers/ECB_23')
const CB24 = require('../controllers/ECB_24')
const CB25 = require('../controllers/ECB_25')

//HB1
router.get('/EHB-1',HB.mostrar,(req,res)=>{
    res.render('EHB-1')
})
//Agregar a la cuenta HB1
router.post('/EAgregarHB1/:id',HB.Crear);
//Eliminar de la cuentaHB1
router.get('/EeliminarHB1/:id',HB.eliminar);
//HB2
router.get('/EHB-2',HB2.mostrar,(req,res)=>{
    res.render('EHB-2')
})
////Agregar a la cuenta HB2
router.post('/EAgregarHB2/:id',HB2.Crear);
//Eliminar de la cuentaHB1
router.get('/EeliminarHB2/:id',HB2.eliminar);

//HB3
router.get('/EHB-3',HB3.mostrar,(req,res)=>{
    res.render('EHB-3')
})
////Agregar a la cuenta HB3
router.post('/EAgregarHB3/:id',HB3.Crear);
//Eliminar de la cuentaHB3
router.get('/EeliminarHB3/:id',HB3.eliminar);
//HB4
router.get('/EHB-4',HB4.mostrar,(req,res)=>{
    res.render('EHB-4')
})
////Agregar a la cuenta HB4
router.post('/EAgregarHB4/:id',HB4.Crear);
//Eliminar de la cuentaHB4
router.get('/EeliminarHB4/:id',HB4.eliminar);
//HB5
router.get('/EHB-5',HB5.mostrar,(req,res)=>{
    res.render('EHB-5')
})
////Agregar a la cuenta HB5
router.post('/EAgregarHB5/:id',HB5.Crear);
//Eliminar de la cuentaHB5
router.get('/EeliminarHB5/:id',HB5.eliminar);
//HB6
router.get('/EHB-6',HB6.mostrar,(req,res)=>{
    res.render('EHB-6')
})
////Agregar a la cuenta HB6
router.post('/EAgregarHB6/:id',HB6.Crear);
//Eliminar de la cuentaHB6
router.get('/EeliminarHB6/:id',HB6.eliminar);
//HB7
router.get('/EHB-7',HB7.mostrar,(req,res)=>{
    res.render('EHB-7')
})
////Agregar a la cuenta HB7
router.post('/EAgregarHB7/:id',HB7.Crear);
//Eliminar de la cuentaHB7
router.get('/EeliminarHB7/:id',HB7.eliminar);
//HB8
router.get('/EHB-8',HB8.mostrar,(req,res)=>{
    res.render('EHB-8')
})
////Agregar a la cuenta HB8
router.post('/EAgregarHB8/:id',HB8.Crear);
//Eliminar de la cuentaHB8
router.get('/EeliminarHB8/:id',HB8.eliminar);
//HB9
router.get('/EHB-9',HB9.mostrar,(req,res)=>{
    res.render('EHB-9')
})
////Agregar a la cuenta HB9
router.post('/EAgregarHB9/:id',HB9.Crear);
//Eliminar de la cuentaHB9
router.get('/EeliminarHB9/:id',HB9.eliminar);
//HB10
router.get('/EHB-10',HB10.mostrar,(req,res)=>{
    res.render('EHB-10')
})
////Agregar a la cuenta HB10
router.post('/EAgregarHB10/:id',HB10.Crear);
//Eliminar de la cuentaHB10
router.get('/EeliminarHB10/:id',HB10.eliminar);

//HB11
router.get('/EHB-11',HB11.mostrar,(req,res)=>{
    res.render('EHB-11')
})
////Agregar a la cuenta HB11
router.post('/EAgregarHB11/:id',HB11.Crear);
//Eliminar de la cuentaHB11
router.get('/EeliminarHB11/:id',HB11.eliminar);

//HB12
router.get('/EHB-12',HB12.mostrar,(req,res)=>{
    res.render('EHB-12')
})
////Agregar a la cuenta HB12
router.post('/EAgregarHB12/:id',HB12.Crear);
//Eliminar de la cuentaHB12
router.get('/EeliminarHB12/:id',HB12.eliminar);

//HB13
router.get('/EHB-13',HB13.mostrar,(req,res)=>{
    res.render('EHB-13')
})
////Agregar a la cuenta HB13
router.post('/EAgregarHB13/:id',HB13.Crear);
//Eliminar de la cuentaHB13
router.get('/EeliminarHB13/:id',HB13.eliminar);

//CB14
router.get('/ECB-14',CB14.mostrar,(req,res)=>{
    res.render('ECB-14')
})
////Agregar a la cuenta CB14
router.post('/EAgregarCB14/:id',CB14.Crear);
//Eliminar de la cuentaCB14
router.get('/EeliminarCB14/:id',CB14.eliminar);

//CB15
router.get('/ECB-15',CB15.mostrar,(req,res)=>{
    res.render('ECB-15')
})
////Agregar a la cuenta CB15
router.post('/EAgregarCB15/:id',CB15.Crear);
//Eliminar de la cuentaCB15
router.get('/EeliminarCB15/:id',CB15.eliminar);

//CB16
router.get('/ECB-16',CB16.mostrar,(req,res)=>{
    res.render('ECB-16')
})
////Agregar a la cuenta CB16
router.post('/EAgregarCB16/:id',CB16.Crear);
//Eliminar de la cuentaCB16
router.get('/EeliminarCB16/:id',CB16.eliminar);

//CB17
router.get('/ECB-17',CB17.mostrar,(req,res)=>{
    res.render('ECB-17')
})
////Agregar a la cuenta CB17
router.post('/EAgregarCB17/:id',CB17.Crear);
//Eliminar de la cuentaCB17
router.get('/EeliminarCB17/:id',CB17.eliminar);

//CB18
router.get('/ECB-18',CB18.mostrar,(req,res)=>{
    res.render('ECB-18')
})
////Agregar a la cuenta CB18
router.post('/EAgregarCB18/:id',CB18.Crear);
//Eliminar de la cuentaCB18
router.get('/EeliminarCB18/:id',CB18.eliminar);

//CB19
router.get('/ECB-19',CB19.mostrar,(req,res)=>{
    res.render('ECB-19')
})
////Agregar a la cuenta CB19
router.post('/EAgregarCB19/:id',CB19.Crear);
//Eliminar de la cuentaCB19
router.get('/EeliminarCB19/:id',CB19.eliminar);

//CB20
router.get('/ECB-20',CB20.mostrar,(req,res)=>{
    res.render('ECB-20')
})
////Agregar a la cuenta CB20
router.post('/EAgregarCB20/:id',CB20.Crear);
//Eliminar de la cuentaCB20
router.get('/EeliminarCB20/:id',CB20.eliminar);

//CB21
router.get('/ECB-21',CB21.mostrar,(req,res)=>{
    res.render('ECB-21')
})
////Agregar a la cuenta CB21
router.post('/EAgregarCB21/:id',CB21.Crear);
//Eliminar de la cuentaCB21
router.get('/EeliminarCB21/:id',CB21.eliminar);

//CB22
router.get('/ECB-22',CB22.mostrar,(req,res)=>{
    res.render('ECB-22')
})
////Agregar a la cuenta CB22
router.post('/EAgregarCB22/:id',CB22.Crear);
//Eliminar de la cuentaCB22
router.get('/EeliminarCB22/:id',CB22.eliminar);

//CB23
router.get('/ECB-23',CB23.mostrar,(req,res)=>{
    res.render('ECB-23')
})
////Agregar a la cuenta CB23
router.post('/EAgregarCB23/:id',CB23.Crear);
//Eliminar de la cuentaCB23
router.get('/EeliminarCB23/:id',CB23.eliminar);

//CB24
router.get('/ECB-24',CB24.mostrar,(req,res)=>{
    res.render('ECB-24')
})
////Agregar a la cuenta CB24
router.post('/EAgregarCB24/:id',CB24.Crear);
//Eliminar de la cuentaCB24
router.get('/EeliminarCB24/:id',CB24.eliminar);
//CB25
router.get('/ECB-25',CB25.mostrar,(req,res)=>{
    res.render('ECB-25')
})
////Agregar a la cuenta CB25
router.post('/EAgregarCB25/:id',CB25.Crear);
//Eliminar de la cuentaCB25
router.get('/EeliminarCB25/:id',CB25.eliminar);


//Agregar Huesped
router.post('/EIngresarCliente',HB.agregar);
router.post('/EIngresarCliente2',HB2.agregar);
router.post('/EIngresarCliente3',HB3.agregar);
router.post('/EIngresarCliente4',HB4.agregar);
router.post('/EIngresarCliente5',HB5.agregar);
router.post('/EIngresarCliente6',HB6.agregar);
router.post('/EIngresarCliente7',HB7.agregar);
router.post('/EIngresarCliente8',HB8.agregar);
router.post('/EIngresarCliente9',HB9.agregar);
router.post('/EIngresarCliente10',HB10.agregar);
router.post('/EIngresarCliente11',HB11.agregar);
router.post('/EIngresarCliente12',HB12.agregar);
router.post('/EIngresarCliente13',HB13.agregar);
router.post('/EIngresarCliente14',CB14.agregar);
router.post('/EIngresarCliente15',CB15.agregar);
router.post('/EIngresarCliente16',CB16.agregar);
router.post('/EIngresarCliente17',CB17.agregar);
router.post('/EIngresarCliente18',CB18.agregar);
router.post('/EIngresarCliente19',CB19.agregar);
router.post('/EIngresarCliente20',CB20.agregar);
router.post('/EIngresarCliente21',CB21.agregar);
router.post('/EIngresarCliente22',CB22.agregar);
router.post('/EIngresarCliente23',CB23.agregar);
router.post('/EIngresarCliente24',CB24.agregar);
router.post('/EIngresarCliente25',CB25.agregar);

//Pagar
//Pagar HB1
router.post('/EPagarHB',HB.pagar);
//Pagar HB2
router.post('/EPagarHB2',HB2.pagar);
//Pagar HB3
router.post('/EPagarHB3',HB3.pagar);
//Pagar HB4
router.post('/EPagarHB4',HB4.pagar);
//Pagar HB5
router.post('/EPagarHB5',HB5.pagar);
//Pagar HB6
router.post('/EPagarHB6',HB6.pagar);
//Pagar HB7
router.post('/EPagarHB7',HB7.pagar);
//Pagar HB8
router.post('/EPagarHB8',HB8.pagar);
//Pagar HB9
router.post('/EPagarHB9',HB9.pagar);
//Pagar HB10
router.post('/EPagarHB10',HB10.pagar);
//Pagar HB11
router.post('/EPagarHB11',HB11.pagar);
//Pagar HB12
router.post('/EPagarHB12',HB12.pagar);
//Pagar HB13
router.post('/EPagarHB13',HB13.pagar);
//Pagar CB14
router.post('/EPagarCB14',CB14.pagar);
//Pagar CB15
router.post('/EPagarCB15',CB15.pagar);
//Pagar CB16
router.post('/EPagarCB16',CB16.pagar);
//Pagar CB17
router.post('/EPagarCB17',CB17.pagar);
//Pagar CB18
router.post('/EPagarCB18',CB18.pagar);
//Pagar CB19
router.post('/EPagarCB19',CB19.pagar);
//Pagar CB20
router.post('/EPagarCB20',CB20.pagar);
//Pagar CB21
router.post('/EPagarCB21',CB21.pagar);
//Pagar CB22
router.post('/EPagarCB22',CB22.pagar);
//Pagar CB23
router.post('/EPagarCB23',CB23.pagar);
//Pagar CB24
router.post('/EPagarCB24',CB24.pagar);
//Pagar CB25
router.post('/EPagarCB25',CB25.pagar);

module.exports= router