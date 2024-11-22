const express = require("express");
const router = express.Router();
const HB = require("../controllers/EHB_1");
const HB2 = require("../controllers/EHB_2");
const HB3 = require("../controllers/EHB_3");
const HB4 = require("../controllers/EHB_4");
const HB5 = require("../controllers/EHB_5");
const HB6 = require("../controllers/EHB_6");
const HB7 = require("../controllers/EHB_7");
const HB8 = require("../controllers/EHB_8");
const HB9 = require("../controllers/EHB_9");
const HB10 = require("../controllers/EHB_10");
const HB11 = require("../controllers/EHB_11");
const HB12 = require("../controllers/EHB_12");
const HB13 = require("../controllers/EHB_13");
const HB14 = require("../controllers/EHB_14");
const HB15 = require("../controllers/EHB_15");
const CB26 = require("../controllers/ECB_26");
const CB27 = require("../controllers/ECB_27");
const CB28 = require("../controllers/ECB_28");
const CB29 = require("../controllers/ECB_29");
const CB30 = require("../controllers/ECB_30");
const CB31 = require("../controllers/ECB_31");
const CB20 = require("../controllers/ECB_20");
const CB21 = require("../controllers/ECB_21");
const CB22 = require("../controllers/ECB_22");
const CB23 = require("../controllers/ECB_23");
const CB24 = require("../controllers/ECB_24");
const CB25 = require("../controllers/ECB_25");

//HB1
router.get("/EHB-1", HB.mostrar, (req, res) => {
  res.render("EHB-1");
});
//EAgregar a la cuenta HB1
router.post("/EAgregarHB1/:id", HB.Crear);
//EEliminar de la cuentaHB1
router.get("/EeliminarHB1/:id", HB.eliminar);
//HB2
router.get("/EHB-2", HB2.mostrar, (req, res) => {
  res.render("EHB-2");
});
////EAgregar a la cuenta HB2
router.post("/EAgregarHB2/:id", HB2.Crear);
//EEliminar de la cuentaHB1
router.get("/EeliminarHB2/:id", HB2.eliminar);

//HB3
router.get("/EHB-3", HB3.mostrar, (req, res) => {
  res.render("EHB-3");
});
////EAgregar a la cuenta HB3
router.post("/EAgregarHB3/:id", HB3.Crear);
//EEliminar de la cuentaHB3
router.get("/EeliminarHB3/:id", HB3.eliminar);
//HB4
router.get("/EHB-4", HB4.mostrar, (req, res) => {
  res.render("EHB-4");
});
////EAgregar a la cuenta HB4
router.post("/EAgregarHB4/:id", HB4.Crear);
//EEliminar de la cuentaHB4
router.get("/EeliminarHB4/:id", HB4.eliminar);
//HB5
router.get("/EHB-5", HB5.mostrar, (req, res) => {
  res.render("EHB-5");
});
////EAgregar a la cuenta HB5
router.post("/EAgregarHB5/:id", HB5.Crear);
//EEliminar de la cuentaHB5
router.get("/EeliminarHB5/:id", HB5.eliminar);
//HB6
router.get("/EHB-6", HB6.mostrar, (req, res) => {
  res.render("EHB-6");
});
////EAgregar a la cuenta HB6
router.post("/EAgregarHB6/:id", HB6.Crear);
//EEliminar de la cuentaHB6
router.get("/EeliminarHB6/:id", HB6.eliminar);
//HB7
router.get("/EHB-7", HB7.mostrar, (req, res) => {
  res.render("EHB-7");
});
////EAgregar a la cuenta HB7
router.post("/EAgregarHB7/:id", HB7.Crear);
//EEliminar de la cuentaHB7
router.get("/EeliminarHB7/:id", HB7.eliminar);
//HB8
router.get("/EHB-8", HB8.mostrar, (req, res) => {
  res.render("EHB-8");
});
////EAgregar a la cuenta HB8
router.post("/EAgregarHB8/:id", HB8.Crear);
//EEliminar de la cuentaHB8
router.get("/EeliminarHB8/:id", HB8.eliminar);
//HB9
router.get("/EHB-9", HB9.mostrar, (req, res) => {
  res.render("EHB-9");
});
////EAgregar a la cuenta HB9
router.post("/EAgregarHB9/:id", HB9.Crear);
//EEliminar de la cuentaHB9
router.get("/EeliminarHB9/:id", HB9.eliminar);
//HB10
router.get("/EHB-10", HB10.mostrar, (req, res) => {
  res.render("EHB-10");
});
////EAgregar a la cuenta HB10
router.post("/EAgregarHB10/:id", HB10.Crear);
//EEliminar de la cuentaHB10
router.get("/EeliminarHB10/:id", HB10.eliminar);

//HB11
router.get("/EHB-11", HB11.mostrar, (req, res) => {
  res.render("EHB-11");
});
////EAgregar a la cuenta HB11
router.post("/EAgregarHB11/:id", HB11.Crear);
//EEliminar de la cuentaHB11
router.get("/EeliminarHB11/:id", HB11.eliminar);

//HB12
router.get("/EHB-12", HB12.mostrar, (req, res) => {
  res.render("EHB-12");
});
////EAgregar a la cuenta HB12
router.post("/EAgregarHB12/:id", HB12.Crear);
//EEliminar de la cuentaHB12
router.get("/EeliminarHB12/:id", HB12.eliminar);

//HB13
router.get("/EHB-13", HB13.mostrar, (req, res) => {
  res.render("EHB-13");
});
////EAgregar a la cuenta HB13
router.post("/EAgregarHB13/:id", HB13.Crear);
//EEliminar de la cuentaHB13
router.get("/EeliminarHB13/:id", HB13.eliminar);
//HB14
router.get("/EHB-14", HB14.mostrar, (req, res) => {
  res.render("EHB-14");
});
////EAgregar a la cuenta HB14
router.post("/EAgregarHB14/:id", HB14.Crear);
//EEliminar de la cuentaHB13
router.get("/EeliminarHB14/:id", HB14.eliminar);
//HB15
router.get("/EHB-15", HB15.mostrar, (req, res) => {
  res.render("EHB-15");
});
////EAgregar a la cuenta HB15
router.post("/EAgregarHB15/:id", HB15.Crear);
//EEliminar de la cuentaHB13
router.get("/EeliminarHB15/:id", HB15.eliminar);

//ECB26
router.get("/ECB-26", CB26.mostrar, (req, res) => {
  res.render("CB-26");
});
////EAgregar a la cuenta CB26
router.post("/EAgregarCB26/:id", CB26.Crear);
//EEliminar de la cuentaCB26
router.get("/EeliminarCB26/:id", CB26.eliminar);

//ECB27
router.get("/ECB-27", CB27.mostrar, (req, res) => {
  res.render("CB-27");
});
////EAgregar a la cuenta CB27
router.post("/EAgregarCB27/:id", CB27.Crear);
//EEliminar de la cuentaCB27
router.get("/EeliminarCB27/:id", CB27.eliminar);

//ECB28
router.get("/ECB-28", CB28.mostrar, (req, res) => {
  res.render("CB-28");
});
////EAgregar a la cuenta CB28
router.post("/EAgregarCB28/:id", CB28.Crear);
//EEliminar de la cuentaCB28
router.get("/EeliminarCB28/:id", CB28.eliminar);

//ECB29
router.get("/ECB-29", CB29.mostrar, (req, res) => {
  res.render("CB-29");
});
////EAgregar a la cuenta CB29
router.post("/EAgregarCB29/:id", CB29.Crear);
//EEliminar de la cuentaCB29
router.get("/EeliminarCB29/:id", CB29.eliminar);

//ECB30
router.get("/ECB-30", CB30.mostrar, (req, res) => {
  res.render("CB-30");
});
////EAgregar a la cuenta CB30
router.post("/EAgregarCB30/:id", CB30.Crear);
//EEliminar de la cuentaCB30
router.get("/EeliminarCB30/:id", CB30.eliminar);

//ECB31
router.get("/ECB-31", CB31.mostrar, (req, res) => {
  res.render("CB-31");
});
////EAgregar a la cuenta CB31
router.post("/EAgregarCB31/:id", CB31.Crear);
//EEliminar de la cuentaCB31
router.get("/EeliminarCB31/:id", CB31.eliminar);

//ECB20
router.get("/ECB-20", CB20.mostrar, (req, res) => {
  res.render("CB-20");
});
////EAgregar a la cuenta CB20
router.post("/EAgregarCB20/:id", CB20.Crear);
//EEliminar de la cuentaCB20
router.get("/EeliminarCB20/:id", CB20.eliminar);

//ECB21
router.get("/ECB-21", CB21.mostrar, (req, res) => {
  res.render("CB-21");
});
////EAgregar a la cuenta CB21
router.post("/EAgregarCB21/:id", CB21.Crear);
//EEliminar de la cuentaCB21
router.get("/EeliminarCB21/:id", CB21.eliminar);

//ECB22
router.get("/ECB-22", CB22.mostrar, (req, res) => {
  res.render("CB-22");
});
////EAgregar a la cuenta CB22
router.post("/EAgregarCB22/:id", CB22.Crear);
//EEliminar de la cuentaCB22
router.get("/EeliminarCB22/:id", CB22.eliminar);

//ECB23
router.get("/ECB-23", CB23.mostrar, (req, res) => {
  res.render("CB-23");
});
////EAgregar a la cuenta CB23
router.post("/EAgregarCB23/:id", CB23.Crear);
//EEliminar de la cuentaCB23
router.get("/EeliminarCB23/:id", CB23.eliminar);

//ECB24
router.get("/ECB-24", CB24.mostrar, (req, res) => {
  res.render("CB-24");
});
////EAgregar a la cuenta CB24
router.post("/EAgregarCB24/:id", CB24.Crear);
//EEliminar de la cuentaCB24
router.get("/EeliminarCB24/:id", CB24.eliminar);
//ECB25
router.get("/ECB-25", CB25.mostrar, (req, res) => {
  res.render("CB-25");
});
////EAgregar a la cuenta CB25
router.post("/EAgregarCB25/:id", CB25.Crear);
//EEliminar de la cuentaCB25
router.get("/EeliminarCB25/:id", CB25.eliminar);
//EAgregar Huesped
router.post("/EIngresarCliente", HB.agregar);
router.post("/EIngresarCliente2", HB2.agregar);
router.post("/EIngresarCliente3", HB3.agregar);
router.post("/EIngresarCliente4", HB4.agregar);
router.post("/EIngresarCliente5", HB5.agregar);
router.post("/EIngresarCliente6", HB6.agregar);
router.post("/EIngresarCliente7", HB7.agregar);
router.post("/EIngresarCliente8", HB8.agregar);
router.post("/EIngresarCliente9", HB9.agregar);
router.post("/EIngresarCliente10", HB10.agregar);
router.post("/EIngresarCliente11", HB11.agregar);
router.post("/EIngresarCliente12", HB12.agregar);
router.post("/EIngresarCliente13", HB13.agregar);
router.post("/EIngresarCliente14", HB14.agregar);
router.post("/EIngresarCliente15", HB15.agregar);
router.post("/EIngresarCliente26", CB26.agregar);
router.post("/EIngresarCliente27", CB27.agregar);
router.post("/EIngresarCliente28", CB28.agregar);
router.post("/EIngresarCliente29", CB29.agregar);
router.post("/EIngresarCliente30", CB30.agregar);
router.post("/EIngresarCliente31", CB31.agregar);
router.post("/EIngresarCliente20", CB20.agregar);
router.post("/EIngresarCliente21", CB21.agregar);
router.post("/EIngresarCliente22", CB22.agregar);
router.post("/EIngresarCliente23", CB23.agregar);
router.post("/EIngresarCliente24", CB24.agregar);
router.post("/EIngresarCliente25", CB25.agregar);

//Rutas de pago de habitacion
//EPagar HB1
router.post("/EPagarHB", HB.pagar);
//EPagar HB2
router.post("/EPagarHB2", HB2.pagar);
//EPagar HB3
router.post("/EPagarHB3", HB3.pagar);
//EPagar HB4
router.post("/EPagarHB4", HB4.pagar);
//EPagar HB5
router.post("/EPagarHB5", HB5.pagar);
//EPagar HB6
router.post("/EPagarHB6", HB6.pagar);
//EPagar HB7
router.post("/EPagarHB7", HB7.pagar);
//EPagar HB8
router.post("/EPagarHB8", HB8.pagar);
//EPagar HB9
router.post("/EPagarHB9", HB9.pagar);
//EPagar HB10
router.post("/EPagarHB10", HB10.pagar);
//EPagar HB11
router.post("/EPagarHB11", HB11.pagar);
//EPagar HB12
router.post("/EPagarHB12", HB12.pagar);
//EPagar HB13
router.post("/EPagarHB13", HB13.pagar);
//EPagar HB14
router.post("/EPagarHB14", HB14.pagar);
//EPagar HB15
router.post("/EPagarHB15", HB13.pagar);
//EPagar CB26
router.post("/EPagarCB26", CB26.pagar);
//EPagar CB27
router.post("/EPagarCB27", CB27.pagar);
//EPagar CB28
router.post("/EPagarCB28", CB28.pagar);
//EPagar CB29
router.post("/EPagarCB29", CB29.pagar);
//EPagar CB30
router.post("/EPagarCB30", CB30.pagar);
//EPagar CB31
router.post("/EPagarCB31", CB31.pagar);
//EPagar CB20
router.post("/EPagarCB20", CB20.pagar);
//EPagar CB21
router.post("/EPagarCB21", CB21.pagar);
//EPagar CB22
router.post("/EPagarCB22", CB22.pagar);
//EPagar CB23
router.post("/EPagarCB23", CB23.pagar);
//EPagar CB24
router.post("/EPagarCB24", CB24.pagar);
//EPagar CB25
router.post("/EPagarCB25", CB25.pagar);

module.exports = router;
