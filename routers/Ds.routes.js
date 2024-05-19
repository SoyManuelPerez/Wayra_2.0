const express = require('express')
const router = express.Router()
const DS = require('../controllers/DS-1')
const Ds = require('../controllers/Ds_controllers')
const DS2 = require('../controllers/DS-2')
const DS3 = require('../controllers/DS-3')
const DS4 = require('../controllers/DS-4')
const DS5 = require('../controllers/DS-5')
const DS6 = require('../controllers/DS-6')
const DS7 = require('../controllers/DS-7')
const DS8 = require('../controllers/DS-8')
const DS9 = require('../controllers/DS-9')
const DS10 = require('../controllers/DS-10')
const DS11 = require('../controllers/DS-11')
const DS12 = require('../controllers/DS-12')
const DS13 = require('../controllers/DS-13')
const DS14 = require('../controllers/DS-14')
const DS15 = require('../controllers/DS-15')
const DS16 = require('../controllers/DS-16')
const DS17 = require('../controllers/DS-17')
const DS18 = require('../controllers/DS-18')
const DS19 = require('../controllers/DS-19')
const DS20 = require('../controllers/DS-20')
const DS21 = require('../controllers/DS-21')
const DS22 = require('../controllers/DS-22')
const DS23 = require('../controllers/DS-23')
const DS24 = require('../controllers/DS-24')
const DS25 = require('../controllers/DS-25')
const DS26 = require('../controllers/DS-26')
const DS27 = require('../controllers/DS-27')
const DS28 = require('../controllers/DS-28')
const DS29 = require('../controllers/DS-29')
const DS30 = require('../controllers/DS-30')
const DS31 = require('../controllers/DS-31')
const DS32 = require('../controllers/DS-32')
const DS33 = require('../controllers/DS-33')
const DS34 = require('../controllers/DS-34')
const DS35 = require('../controllers/DS-35')
const DS36 = require('../controllers/DS-16')
const DS37 = require('../controllers/DS-37')
const DS38 = require('../controllers/DS-38')
const DS39 = require('../controllers/DS-39')
const DS40 = require('../controllers/DS-40')
const DS41 = require('../controllers/DS-41')
const DS42 = require('../controllers/DS-42')
const DS43 = require('../controllers/DS-43')
const DS44 = require('../controllers/DS-44')
const DS45 = require('../controllers/DS-45')
const DS46 = require('../controllers/DS-46')
const DS47 = require('../controllers/DS-47')
const DS48 = require('../controllers/DS-48')
const DS49 = require('../controllers/DS-49')
const DS50 = require('../controllers/DS-50')

//Mostrar Dias de sol
//Dias de sol 1
router.get('/DS-1',DS.mostrar,(req,res)=>{
    res.render('DS-1')
})
//Dias de sol 2
router.get('/DS-2',DS2.mostrar,(req,res)=>{
    res.render('DS-2')
})
//Dias de sol 3
router.get('/DS-3',DS3.mostrar,(req,res)=>{
    res.render('DS-3')
})
//Dias de sol 4
router.get('/DS-4',DS4.mostrar,(req,res)=>{
    res.render('DS-4')
})
//Dias de sol 5
router.get('/DS-5',DS5.mostrar,(req,res)=>{
    res.render('DS-5')
})
//Dias de sol 6
router.get('/DS-6',DS6.mostrar,(req,res)=>{
    res.render('DS-6')
})
//Dias de sol 7
router.get('/DS-7',DS7.mostrar,(req,res)=>{
    res.render('DS-7')
})
//Dias de sol 8
router.get('/DS-8',DS8.mostrar,(req,res)=>{
    res.render('DS-8')
})
//Dias de sol 9
router.get('/DS-9',DS9.mostrar,(req,res)=>{
    res.render('DS-9')
})
//Dias de sol 10
router.get('/DS-10',DS10.mostrar,(req,res)=>{
    res.render('DS-10')
})
//Dias de sol 11
router.get('/DS-11',DS11.mostrar,(req,res)=>{
    res.render('DS-11')
})
//Dias de sol 12
router.get('/DS-12',DS12.mostrar,(req,res)=>{
    res.render('DS-12')
})
//Dias de sol 13
router.get('/DS-13',DS13.mostrar,(req,res)=>{
    res.render('DS-13')
})
//Dias de sol 14
router.get('/DS-14',DS14.mostrar,(req,res)=>{
    res.render('DS-14')
})
//Dias de sol 15
router.get('/DS-15',DS15.mostrar,(req,res)=>{
    res.render('DS-15')
})
//Dias de sol 16
router.get('/DS-16',DS16.mostrar,(req,res)=>{
    res.render('DS-16')
})
//Dias de sol 17
router.get('/DS-17',DS17.mostrar,(req,res)=>{
    res.render('DS-17')
})
//Dias de sol 18
router.get('/DS-18',DS18.mostrar,(req,res)=>{
    res.render('DS-18')
})
//Dias de sol 19
router.get('/DS-19',DS19.mostrar,(req,res)=>{
    res.render('DS-19')
})
//Dias de sol 20
router.get('/DS-20',DS20.mostrar,(req,res)=>{
    res.render('DS-20')
})
//Dias de sol 21
router.get('/DS-21',DS21.mostrar,(req,res)=>{
    res.render('DS-21')
})
//Dias de sol 22
router.get('/DS-22',DS22.mostrar,(req,res)=>{
    res.render('DS-22')
})
//Dias de sol 23
router.get('/DS-23',DS23.mostrar,(req,res)=>{
    res.render('DS-23')
})
//Dias de sol 24
router.get('/DS-24',DS24.mostrar,(req,res)=>{
    res.render('DS-24')
})
//Dias de sol 25
router.get('/DS-25',DS25.mostrar,(req,res)=>{
    res.render('DS-25')
})
//Dias de sol 26
router.get('/DS-26',DS26.mostrar,(req,res)=>{
    res.render('DS-26')
})
//Dias de sol 27
router.get('/DS-27',DS27.mostrar,(req,res)=>{
    res.render('DS-27')
})
//Dias de sol 28
router.get('/DS-28',DS28.mostrar,(req,res)=>{
    res.render('DS-28')
})
//Dias de sol 29
router.get('/DS-29',DS29.mostrar,(req,res)=>{
    res.render('DS-29')
})
//Dias de sol 30
router.get('/DS-30',DS30.mostrar,(req,res)=>{
    res.render('DS-30')
})
//Dias de sol 31
router.get('/DS-31',DS31.mostrar,(req,res)=>{
    res.render('DS-31')
})

//Dias de sol 32
router.get('/DS-32',DS32.mostrar,(req,res)=>{
    res.render('DS-32')
})

//Dias de sol 33
router.get('/DS-33',DS33.mostrar,(req,res)=>{
    res.render('DS-33')
})

//Dias de sol 34
router.get('/DS-34',DS34.mostrar,(req,res)=>{
    res.render('DS-34')
})

//Dias de sol 35
router.get('/DS-35',DS35.mostrar,(req,res)=>{
    res.render('DS-35')
})

//Dias de sol 36
router.get('/DS-36',DS36.mostrar,(req,res)=>{
    res.render('DS-36')
})

//Dias de sol 37
router.get('/DS-37',DS37.mostrar,(req,res)=>{
    res.render('DS-37')
})

//Dias de sol 38
router.get('/DS-38',DS38.mostrar,(req,res)=>{
    res.render('DS-38')
})

//Dias de sol 39
router.get('/DS-39',DS39.mostrar,(req,res)=>{
    res.render('DS-39')
})

//Dias de sol 40
router.get('/DS-40',DS40.mostrar,(req,res)=>{
    res.render('DS-40')
})

//Dias de sol 41
router.get('/DS-41',DS41.mostrar,(req,res)=>{
    res.render('DS-41')
})

//Dias de sol 42
router.get('/DS-42',DS42.mostrar,(req,res)=>{
    res.render('DS-42')
})

//Dias de sol 43
router.get('/DS-43',DS43.mostrar,(req,res)=>{
    res.render('DS-43')
})

//Dias de sol 44
router.get('/DS-44',DS44.mostrar,(req,res)=>{
    res.render('DS-44')
})

//Dias de sol 45
router.get('/DS-45',DS45.mostrar,(req,res)=>{
    res.render('DS-45')
})

//Dias de sol 46
router.get('/DS-46',DS46.mostrar,(req,res)=>{
    res.render('DS-46')
})

//Dias de sol 47
router.get('/DS-47',DS47.mostrar,(req,res)=>{
    res.render('DS-47')
})

//Dias de sol 48
router.get('/DS-48',DS48.mostrar,(req,res)=>{
    res.render('DS-48')
})

//Dias de sol 49
router.get('/DS-49',DS49.mostrar,(req,res)=>{
    res.render('DS-49')
})
//Dias de sol 50
router.get('/DS-50',DS50.mostrar,(req,res)=>{
    res.render('DS-50')
})


//Ingresar dias de sol
router.post('/IngresarDS',Ds.agregar);
//Ingresar dias de sol 2
router.post('/IngresarDS2',DS2.agregar);
//Ingresar dias de sol 3
router.post('/IngresarDS3',DS3.agregar);
//Ingresar dias de sol 4
router.post('/IngresarDS4',DS4.agregar);
//Ingresar dias de sol 5
router.post('/IngresarDS5',DS5.agregar);
//Ingresar dias de sol 6
router.post('/IngresarDS6',DS6.agregar);
//Ingresar dias de sol 7
router.post('/IngresarDS7',DS7.agregar);
//Ingresar dias de sol 8
router.post('/IngresarDS8',DS8.agregar);
//Ingresar dias de sol 9
router.post('/IngresarDS9',DS9.agregar);
//Ingresar dias de sol 10
router.post('/IngresarDS10',DS10.agregar);
//Ingresar dias de sol 11
router.post('/IngresarDS11',DS11.agregar);
//Ingresar dias de sol 12
router.post('/IngresarDS12',DS12.agregar);
//Ingresar dias de sol 13
router.post('/IngresarDS13',DS13.agregar);
//Ingresar dias de sol 14
router.post('/IngresarDS14',DS14.agregar);
//Ingresar dias de sol 15
router.post('/IngresarDS15',DS15.agregar);
//Ingresar dias de sol 16
router.post('/IngresarDS16',DS16.agregar);
//Ingresar dias de sol 17
router.post('/IngresarDS17',DS17.agregar);
//Ingresar dias de sol 18
router.post('/IngresarDS18',DS18.agregar);
//Ingresar dias de sol 19
router.post('/IngresarDS19',DS19.agregar);
//Ingresar dias de sol 20
router.post('/IngresarDS20',DS20.agregar);
//Ingresar dias de sol 21
router.post('/IngresarDS21',DS21.agregar);
//Ingresar dias de sol 22
router.post('/IngresarDS22',DS22.agregar);
//Ingresar dias de sol 23
router.post('/IngresarDS23',DS23.agregar);
//Ingresar dias de sol 24
router.post('/IngresarDS24',DS24.agregar);
//Ingresar dias de sol 25
router.post('/IngresarDS25',DS25.agregar);
//Ingresar dias de sol 26
router.post('/IngresarDS26',DS26.agregar);
//Ingresar dias de sol 27
router.post('/IngresarDS27',DS27.agregar);
//Ingresar dias de sol 28
router.post('/IngresarDS28',DS28.agregar);
//Ingresar dias de sol 29
router.post('/IngresarDS29',DS29.agregar);
//Ingresar dias de sol 30
router.post('/IngresarDS30',DS30.agregar);
//Ingresar dias de sol 31
router.post('/IngresarDS31',DS31.agregar);
//Ingresar dias de sol 32
router.post('/IngresarDS32',DS32.agregar);
//Ingresar dias de sol 33
router.post('/IngresarDS33',DS33.agregar);
//Ingresar dias de sol 34
router.post('/IngresarDS34',DS34.agregar);
//Ingresar dias de sol 35
router.post('/IngresarDS35',DS35.agregar);
//Ingresar dias de sol 36
router.post('/IngresarDS36',DS36.agregar);
//Ingresar dias de sol 37
router.post('/IngresarDS37',DS37.agregar);
//Ingresar dias de sol 38
router.post('/IngresarDS38',DS38.agregar);
//Ingresar dias de sol 39
router.post('/IngresarDS39',DS39.agregar);
//Ingresar dias de sol 40
router.post('/IngresarDS40',DS40.agregar);
//Ingresar dias de sol 41
router.post('/IngresarDS41',DS41.agregar);
//Ingresar dias de sol 42
router.post('/IngresarDS42',DS42.agregar);
//Ingresar dias de sol 43
router.post('/IngresarDS43',DS43.agregar);
//Ingresar dias de sol 44
router.post('/IngresarDS44',DS44.agregar);
//Ingresar dias de sol 45
router.post('/IngresarDS45',DS45.agregar);
//Ingresar dias de sol 46
router.post('/IngresarDS46',DS46.agregar);
//Ingresar dias de sol 47
router.post('/IngresarDS47',DS47.agregar);
//Ingresar dias de sol 48
router.post('/IngresarDS48',DS48.agregar);
//Ingresar dias de sol 49
router.post('/IngresarDS49',DS49.agregar);
//Ingresar dias de sol 50
router.post('/IngresarDS50',DS50.agregar);


// Pagar Dias de sol
//Pagar ds 1
router.post('/PagarDS1',DS.pagar);
//Pagar ds 2
router.post('/PagarDS2',DS2.pagar);
//Pagar ds 3
router.post('/PagarDS3',DS3.pagar);
//Pagar ds 4
router.post('/PagarDS4',DS4.pagar);
//Pagar ds 5
router.post('/PagarDS5',DS5.pagar);
//Pagar ds 6
router.post('/PagarDS6',DS6.pagar);
//Pagar ds 7
router.post('/PagarDS7',DS7.pagar);
//Pagar ds 8
router.post('/PagarDS8',DS8.pagar);
//Pagar ds 9
router.post('/PagarDS9',DS9.pagar);
//Pagar ds 10
router.post('/PagarDS10',DS10.pagar);
//Pagar ds 11
router.post('/PagarDS11',DS11.pagar);
//Pagar ds 12
router.post('/PagarDS12',DS12.pagar);
//Pagar ds 13
router.post('/PagarDS13',DS13.pagar);
//Pagar ds 14
router.post('/PagarDS14',DS14.pagar);
//Pagar ds 15
router.post('/PagarDS15',DS15.pagar);
//Pagar ds 16
router.post('/PagarDS16',DS16.pagar);
//Pagar ds 17
router.post('/PagarDS17',DS17.pagar);
//Pagar ds 18
router.post('/PagarDS18',DS18.pagar);
//Pagar ds 19
router.post('/PagarDS19',DS19.pagar);
//Pagar ds 20
router.post('/PagarDS20',DS20.pagar);
//Pagar ds 21
router.get('/PagarDS21',DS21.pagar);
//Pagar ds 22
router.get('/PagarDS22',DS22.pagar);
//Pagar ds 23
router.get('/PagarDS23',DS23.pagar);
//Pagar ds 24
router.get('/PagarDS24',DS24.pagar);
//Pagar ds 25
router.get('/PagarDS25',DS25.pagar);
//Pagar ds 26
router.get('/PagarDS26',DS26.pagar);
//Pagar ds 27
router.get('/PagarDS27',DS27.pagar);
//Pagar ds 28
router.get('/PagarDS28',DS28.pagar);
//Pagar ds 29
router.get('/PagarDS29',DS29.pagar);
//Pagar ds 30
router.get('/PagarDS30',DS30.pagar);
//Pagar ds 31
router.get('/PagarDS31',DS31.pagar);
//Pagar ds 32
router.get('/PagarDS32',DS32.pagar);
//Pagar ds 33
router.get('/PagarDS33',DS33.pagar);
//Pagar ds 34
router.get('/PagarDS34',DS34.pagar);
//Pagar ds 35
router.get('/PagarDS35',DS35.pagar);
//Pagar ds 36
router.get('/PagarDS36',DS36.pagar);
//Pagar ds 37
router.get('/PagarDS37',DS37.pagar);
//Pagar ds 38
router.get('/PagarDS38',DS38.pagar);
//Pagar ds 39
router.get('/PagarDS39',DS39.pagar);
//Pagar ds 40
router.get('/PagarDS40',DS40.pagar);
//Pagar ds 41
router.get('/PagarDS41',DS41.pagar);
//Pagar ds 42
router.get('/PagarDS42',DS42.pagar);
//Pagar ds 43
router.get('/PagarDS43',DS43.pagar);
//Pagar ds 44
router.get('/PagarDS44',DS44.pagar);
//Pagar ds 45
router.get('/PagarDS45',DS45.pagar);
//Pagar ds 46
router.get('/PagarDS46',DS46.pagar);
//Pagar ds 47
router.get('/PagarDS47',DS47.pagar);
//Pagar ds 48
router.get('/PagarDS48',DS48.pagar);
//Pagar ds 49
router.get('/PagarDS49',DS49.pagar);
//Pagar ds 50
router.get('/PagarDS50',DS50.pagar);

//Agregar a cuentas 
//Agregar a la cuenta Ds1
router.get('/AgregarDS1/:id',DS.Crear);
//Agregar a la cuenta Ds2
router.get('/AgregarDS2/:id',DS2.Crear);
//Agregar a la cuenta Ds3
router.get('/AgregarDS3/:id',DS3.Crear);
//Agregar a la cuenta Ds4
router.get('/AgregarDS4/:id',DS4.Crear);
//Agregar a la cuenta Ds5
router.get('/AgregarDS5/:id',DS5.Crear);
//Agregar a la cuenta Ds6
router.get('/AgregarDS6/:id',DS6.Crear);
//Agregar a la cuenta Ds7
router.get('/AgregarDS7/:id',DS7.Crear);
//Agregar a la cuenta Ds8
router.get('/AgregarDS8/:id',DS8.Crear);
//Agregar a la cuenta Ds9
router.get('/AgregarDS9/:id',DS9.Crear);
//Agregar a la cuenta Ds10
router.get('/AgregarDS10/:id',DS10.Crear);
//Agregar a la cuenta Ds11
router.get('/AgregarDS11/:id',DS11.Crear);
//Agregar a la cuenta Ds12
router.get('/AgregarDS12/:id',DS12.Crear);
//Agregar a la cuenta Ds13
router.get('/AgregarDS13/:id',DS13.Crear);
//Agregar a la cuenta Ds14
router.get('/AgregarDS14/:id',DS14.Crear);
//Agregar a la cuenta Ds15
router.get('/AgregarDS15/:id',DS15.Crear);
//Agregar a la cuenta Ds16
router.get('/AgregarDS16/:id',DS16.Crear);
//Agregar a la cuenta Ds17
router.get('/AgregarDS17/:id',DS17.Crear);
//Agregar a la cuenta Ds18
router.get('/AgregarDS18/:id',DS18.Crear);
//Agregar a la cuenta Ds19
router.get('/AgregarDS19/:id',DS19.Crear);
//Agregar a la cuenta Ds20
router.get('/AgregarDS20/:id',DS20.Crear);
//Agregar a la cuenta Ds21
router.get('/AgregarDS21/:id',DS21.Crear);
//Agregar a la cuenta Ds22
router.get('/AgregarDS22/:id',DS22.Crear);
//Agregar a la cuenta Ds23
router.get('/AgregarDS23/:id',DS23.Crear);
//Agregar a la cuenta Ds24
router.get('/AgregarDS24/:id',DS24.Crear);
//Agregar a la cuenta Ds25
router.get('/AgregarDS25/:id',DS25.Crear);
//Agregar a la cuenta Ds26
router.get('/AgregarDS26/:id',DS26.Crear);
//Agregar a la cuenta Ds27
router.get('/AgregarDS27/:id',DS27.Crear);
//Agregar a la cuenta Ds28
router.get('/AgregarDS28/:id',DS28.Crear);
//Agregar a la cuenta Ds29
router.get('/AgregarDS29/:id',DS29.Crear);
//Agregar a la cuenta Ds30
router.get('/AgregarDS30/:id',DS30.Crear);
//Agregar a la cuenta Ds31
router.get('/AgregarDS31/:id',DS31.Crear);
//Agregar a la cuenta Ds32
router.get('/AgregarDS32/:id',DS32.Crear);
//Agregar a la cuenta Ds33
router.get('/AgregarDS33/:id',DS33.Crear);
//Agregar a la cuenta Ds34
router.get('/AgregarDS34/:id',DS34.Crear);
//Agregar a la cuenta Ds35
router.get('/AgregarDS35/:id',DS35.Crear);
//Agregar a la cuenta Ds36
router.get('/AgregarDS36/:id',DS36.Crear);
//Agregar a la cuenta Ds37
router.get('/AgregarDS37/:id',DS37.Crear);
//Agregar a la cuenta Ds38
router.get('/AgregarDS38/:id',DS38.Crear);
//Agregar a la cuenta Ds39
router.get('/AgregarDS39/:id',DS39.Crear);
//Agregar a la cuenta Ds40
router.get('/AgregarDS40/:id',DS40.Crear);
//Agregar a la cuenta Ds41
router.get('/AgregarDS41/:id',DS41.Crear);
//Agregar a la cuenta Ds42
router.get('/AgregarDS42/:id',DS42.Crear);
//Agregar a la cuenta Ds43
router.get('/AgregarDS43/:id',DS43.Crear);
//Agregar a la cuenta Ds44
router.get('/AgregarDS44/:id',DS44.Crear);
//Agregar a la cuenta Ds45
router.get('/AgregarDS45/:id',DS45.Crear);
//Agregar a la cuenta Ds46
router.get('/AgregarDS46/:id',DS46.Crear);
//Agregar a la cuenta Ds47
router.get('/AgregarDS47/:id',DS47.Crear);
//Agregar a la cuenta Ds48
router.get('/AgregarDS48/:id',DS48.Crear);
//Agregar a la cuenta Ds49
router.get('/AgregarDS49/:id',DS49.Crear);
//Agregar a la cuenta Ds50
router.get('/AgregarDS50/:id',DS50.Crear);

//eliminar de la cuenta
//Eliminar de la cuentaDS1
router.get('/eliminarDS1/:id',DS.eliminar);
//Eliminar de la cuentaDS2
router.get('/eliminarDS2/:id',DS2.eliminar);
//Eliminar de la cuentaDS3
router.get('/eliminarDS3/:id',DS3.eliminar);
//Eliminar de la cuentaDS4
router.get('/eliminarDS4/:id',DS4.eliminar);
//Eliminar de la cuentaDS5
router.get('/eliminarDS5/:id',DS5.eliminar);
//Eliminar de la cuentaDS6
router.get('/eliminarDS6/:id',DS6.eliminar);
//Eliminar de la cuentaDS7
router.get('/eliminarDS7/:id',DS7.eliminar);
//Eliminar de la cuentaDS8
router.get('/eliminarDS8/:id',DS8.eliminar);
//Eliminar de la cuentaDS9
router.get('/eliminarDS9/:id',DS9.eliminar);
//Eliminar de la cuentaDS10
router.get('/eliminarDS10/:id',DS10.eliminar);
//Eliminar de la cuentaDS11
router.get('/eliminarDS11/:id',DS11.eliminar);
//Eliminar de la cuentaDS12
router.get('/eliminarDS12/:id',DS12.eliminar);
//Eliminar de la cuentaDS13
router.get('/eliminarDS13/:id',DS13.eliminar);
//Eliminar de la cuentaDS14
router.get('/eliminarDS14/:id',DS14.eliminar);
//Eliminar de la cuentaDS15
router.get('/eliminarDS15/:id',DS15.eliminar);
//Eliminar de la cuentaDS16
router.get('/eliminarDS16/:id',DS16.eliminar);
//Eliminar de la cuentaDS17
router.get('/eliminarDS17/:id',DS17.eliminar);
//Eliminar de la cuentaDS18
router.get('/eliminarDS18/:id',DS18.eliminar);
//Eliminar de la cuentaDS19
router.get('/eliminarDS19/:id',DS19.eliminar);
//Eliminar de la cuentaDS20
router.get('/eliminarDS20/:id',DS20.eliminar);
//Eliminar de la cuentaDS21
router.get('/eliminarDS21/:id',DS21.eliminar);
//Eliminar de la cuentaDS22
router.get('/eliminarDS22/:id',DS22.eliminar);
//Eliminar de la cuentaDS23
router.get('/eliminarDS23/:id',DS23.eliminar);
//Eliminar de la cuentaDS24
router.get('/eliminarDS24/:id',DS24.eliminar);
//Eliminar de la cuentaDS25
router.get('/eliminarDS25/:id',DS25.eliminar);
//Eliminar de la cuentaDS26
router.get('/eliminarDS26/:id',DS26.eliminar);
//Eliminar de la cuentaDS27
router.get('/eliminarDS27/:id',DS27.eliminar);
//Eliminar de la cuentaDS28
router.get('/eliminarDS28/:id',DS28.eliminar);
//Eliminar de la cuentaDS29
router.get('/eliminarDS29/:id',DS29.eliminar);
//Eliminar de la cuentaDS30
router.get('/eliminarDS30/:id',DS30.eliminar);
//Eliminar de la cuentaDS31
router.get('/eliminarDS31/:id',DS31.eliminar);
//Eliminar de la cuentaDS32
router.get('/eliminarDS32/:id',DS32.eliminar);
//Eliminar de la cuentaDS33
router.get('/eliminarDS33/:id',DS33.eliminar);
//Eliminar de la cuentaDS34
router.get('/eliminarDS34/:id',DS34.eliminar);
//Eliminar de la cuentaDS35
router.get('/eliminarDS35/:id',DS35.eliminar);
//Eliminar de la cuentaDS36
router.get('/eliminarDS36/:id',DS36.eliminar);
//Eliminar de la cuentaDS37
router.get('/eliminarDS37/:id',DS37.eliminar);
//Eliminar de la cuentaDS38
router.get('/eliminarDS38/:id',DS38.eliminar);
//Eliminar de la cuentaDS39
router.get('/eliminarDS39/:id',DS39.eliminar);
//Eliminar de la cuentaDS40
router.get('/eliminarDS40/:id',DS40.eliminar);
//Eliminar de la cuentaDS41
router.get('/eliminarDS41/:id',DS41.eliminar);
//Eliminar de la cuentaDS42
router.get('/eliminarDS42/:id',DS42.eliminar);
//Eliminar de la cuentaDS43
router.get('/eliminarDS43/:id',DS43.eliminar);
//Eliminar de la cuentaDS44
router.get('/eliminarDS44/:id',DS44.eliminar);
//Eliminar de la cuentaDS45
router.get('/eliminarDS45/:id',DS45.eliminar);
//Eliminar de la cuentaDS46
router.get('/eliminarDS46/:id',DS46.eliminar);
//Eliminar de la cuentaDS47
router.get('/eliminarDS47/:id',DS47.eliminar);
//Eliminar de la cuentaDS48
router.get('/eliminarDS48/:id',DS48.eliminar);
//Eliminar de la cuentaDS49
router.get('/eliminarDS49/:id',DS49.eliminar);
//Eliminar de la cuentaDS50
router.get('/eliminarDS50/:id',DS50.eliminar);

module.exports= router