const express = require("express");
const router = express.Router();
const HB = require("../controllers/HB_1");
const HB2 = require("../controllers/HB_2");
const HB3 = require("../controllers/HB_3");
const HB4 = require("../controllers/HB_4");
const HB5 = require("../controllers/HB_5");
const HB6 = require("../controllers/HB_6");
const HB7 = require("../controllers/HB_7");
const HB8 = require("../controllers/HB_8");
const HB9 = require("../controllers/HB_9");
const HB10 = require("../controllers/HB_10");
const HB11 = require("../controllers/HB_11");
const HB12 = require("../controllers/HB_12");
const HB13 = require("../controllers/HB_13");
const HB14 = require("../controllers/HB_14");
const HB15 = require("../controllers/HB_15");
const CB26 = require("../controllers/CB_26");
const CB27 = require("../controllers/CB_27");
const CB28 = require("../controllers/CB_28");
const CB29 = require("../controllers/CB_29");
const CB30 = require("../controllers/CB_30");
const CB31 = require("../controllers/CB_31");
const CB20 = require("../controllers/CB_20");
const CB21 = require("../controllers/CB_21");
const CB22 = require("../controllers/CB_22");
const CB23 = require("../controllers/CB_23");
const CB24 = require("../controllers/CB_24");
const CB25 = require("../controllers/CB_25");

//HB1
router.get("/HB-1", HB.mostrar, (req, res) => {
  res.render("HB-1");
});
//Agregar a la cuenta HB1
router.post("/AgregarHB1/:id", HB.Crear);
//Eliminar de la cuentaHB1
router.get("/eliminarHB1/:id", HB.eliminar);
//HB2
router.get("/HB-2", HB2.mostrar, (req, res) => {
  res.render("HB-2");
});
////Agregar a la cuenta HB2
router.post("/AgregarHB2/:id", HB2.Crear);
//Eliminar de la cuentaHB1
router.get("/eliminarHB2/:id", HB2.eliminar);

//HB3
router.get("/HB-3", HB3.mostrar, (req, res) => {
  res.render("HB-3");
});
////Agregar a la cuenta HB3
router.post("/AgregarHB3/:id", HB3.Crear);
//Eliminar de la cuentaHB3
router.get("/eliminarHB3/:id", HB3.eliminar);
//HB4
router.get("/HB-4", HB4.mostrar, (req, res) => {
  res.render("HB-4");
});
////Agregar a la cuenta HB4
router.post("/AgregarHB4/:id", HB4.Crear);
//Eliminar de la cuentaHB4
router.get("/eliminarHB4/:id", HB4.eliminar);
//HB5
router.get("/HB-5", HB5.mostrar, (req, res) => {
  res.render("HB-5");
});
////Agregar a la cuenta HB5
router.post("/AgregarHB5/:id", HB5.Crear);
//Eliminar de la cuentaHB5
router.get("/eliminarHB5/:id", HB5.eliminar);
//HB6
router.get("/HB-6", HB6.mostrar, (req, res) => {
  res.render("HB-6");
});
////Agregar a la cuenta HB6
router.post("/AgregarHB6/:id", HB6.Crear);
//Eliminar de la cuentaHB6
router.get("/eliminarHB6/:id", HB6.eliminar);
//HB7
router.get("/HB-7", HB7.mostrar, (req, res) => {
  res.render("HB-7");
});
////Agregar a la cuenta HB7
router.post("/AgregarHB7/:id", HB7.Crear);
//Eliminar de la cuentaHB7
router.get("/eliminarHB7/:id", HB7.eliminar);
//HB8
router.get("/HB-8", HB8.mostrar, (req, res) => {
  res.render("HB-8");
});
////Agregar a la cuenta HB8
router.post("/AgregarHB8/:id", HB8.Crear);
//Eliminar de la cuentaHB8
router.get("/eliminarHB8/:id", HB8.eliminar);
//HB9
router.get("/HB-9", HB9.mostrar, (req, res) => {
  res.render("HB-9");
});
////Agregar a la cuenta HB9
router.post("/AgregarHB9/:id", HB9.Crear);
//Eliminar de la cuentaHB9
router.get("/eliminarHB9/:id", HB9.eliminar);
//HB10
router.get("/HB-10", HB10.mostrar, (req, res) => {
  res.render("HB-10");
});
////Agregar a la cuenta HB10
router.post("/AgregarHB10/:id", HB10.Crear);
//Eliminar de la cuentaHB10
router.get("/eliminarHB10/:id", HB10.eliminar);

//HB11
router.get("/HB-11", HB11.mostrar, (req, res) => {
  res.render("HB-11");
});
////Agregar a la cuenta HB11
router.post("/AgregarHB11/:id", HB11.Crear);
//Eliminar de la cuentaHB11
router.get("/eliminarHB11/:id", HB11.eliminar);

//HB12
router.get("/HB-12", HB12.mostrar, (req, res) => {
  res.render("HB-12");
});
////Agregar a la cuenta HB12
router.post("/AgregarHB12/:id", HB12.Crear);
//Eliminar de la cuentaHB12
router.get("/eliminarHB12/:id", HB12.eliminar);

//HB13
router.get("/HB-13", HB13.mostrar, (req, res) => {
  res.render("HB-13");
});
////Agregar a la cuenta HB13
router.post("/AgregarHB13/:id", HB13.Crear);
//Eliminar de la cuentaHB13
router.get("/eliminarHB13/:id", HB13.eliminar);
//HB14
router.get("/HB-14", HB14.mostrar, (req, res) => {
  res.render("HB-14");
});
////Agregar a la cuenta HB14
router.post("/AgregarHB14/:id", HB14.Crear);
//Eliminar de la cuentaHB13
router.get("/eliminarHB14/:id", HB14.eliminar);
//HB15
router.get("/HB-15", HB15.mostrar, (req, res) => {
  res.render("HB-15");
});
////Agregar a la cuenta HB15
router.post("/AgregarHB15/:id", HB15.Crear);
//Eliminar de la cuentaHB13
router.get("/eliminarHB15/:id", HB15.eliminar);

//CB26
router.get("/CB-26", CB26.mostrar, (req, res) => {
  res.render("CB-26");
});
////Agregar a la cuenta CB26
router.post("/AgregarCB26/:id", CB26.Crear);
//Eliminar de la cuentaCB26
router.get("/eliminarCB26/:id", CB26.eliminar);

//CB27
router.get("/CB-27", CB27.mostrar, (req, res) => {
  res.render("CB-27");
});
////Agregar a la cuenta CB27
router.post("/AgregarCB27/:id", CB27.Crear);
//Eliminar de la cuentaCB27
router.get("/eliminarCB27/:id", CB27.eliminar);

//CB28
router.get("/CB-28", CB28.mostrar, (req, res) => {
  res.render("CB-28");
});
////Agregar a la cuenta CB28
router.post("/AgregarCB28/:id", CB28.Crear);
//Eliminar de la cuentaCB28
router.get("/eliminarCB28/:id", CB28.eliminar);

//CB29
router.get("/CB-29", CB29.mostrar, (req, res) => {
  res.render("CB-29");
});
////Agregar a la cuenta CB29
router.post("/AgregarCB29/:id", CB29.Crear);
//Eliminar de la cuentaCB29
router.get("/eliminarCB29/:id", CB29.eliminar);

//CB30
router.get("/CB-30", CB30.mostrar, (req, res) => {
  res.render("CB-30");
});
////Agregar a la cuenta CB30
router.post("/AgregarCB30/:id", CB30.Crear);
//Eliminar de la cuentaCB30
router.get("/eliminarCB30/:id", CB30.eliminar);

//CB31
router.get("/CB-31", CB31.mostrar, (req, res) => {
  res.render("CB-31");
});
////Agregar a la cuenta CB31
router.post("/AgregarCB31/:id", CB31.Crear);
//Eliminar de la cuentaCB31
router.get("/eliminarCB31/:id", CB31.eliminar);

//CB20
router.get("/CB-20", CB20.mostrar, (req, res) => {
  res.render("CB-20");
});
////Agregar a la cuenta CB20
router.post("/AgregarCB20/:id", CB20.Crear);
//Eliminar de la cuentaCB20
router.get("/eliminarCB20/:id", CB20.eliminar);

//CB21
router.get("/CB-21", CB21.mostrar, (req, res) => {
  res.render("CB-21");
});
////Agregar a la cuenta CB21
router.post("/AgregarCB21/:id", CB21.Crear);
//Eliminar de la cuentaCB21
router.get("/eliminarCB21/:id", CB21.eliminar);

//CB22
router.get("/CB-22", CB22.mostrar, (req, res) => {
  res.render("CB-22");
});
////Agregar a la cuenta CB22
router.post("/AgregarCB22/:id", CB22.Crear);
//Eliminar de la cuentaCB22
router.get("/eliminarCB22/:id", CB22.eliminar);

//CB23
router.get("/CB-23", CB23.mostrar, (req, res) => {
  res.render("CB-23");
});
////Agregar a la cuenta CB23
router.post("/AgregarCB23/:id", CB23.Crear);
//Eliminar de la cuentaCB23
router.get("/eliminarCB23/:id", CB23.eliminar);

//CB24
router.get("/CB-24", CB24.mostrar, (req, res) => {
  res.render("CB-24");
});
////Agregar a la cuenta CB24
router.post("/AgregarCB24/:id", CB24.Crear);
//Eliminar de la cuentaCB24
router.get("/eliminarCB24/:id", CB24.eliminar);
//CB25
router.get("/CB-25", CB25.mostrar, (req, res) => {
  res.render("CB-25");
});
////Agregar a la cuenta CB25
router.post("/AgregarCB25/:id", CB25.Crear);
//Eliminar de la cuentaCB25
router.get("/eliminarCB25/:id", CB25.eliminar);
//Agregar Huesped
router.post("/IngresarCliente", HB.agregar);
router.post("/IngresarCliente2", HB2.agregar);
router.post("/IngresarCliente3", HB3.agregar);
router.post("/IngresarCliente4", HB4.agregar);
router.post("/IngresarCliente5", HB5.agregar);
router.post("/IngresarCliente6", HB6.agregar);
router.post("/IngresarCliente7", HB7.agregar);
router.post("/IngresarCliente8", HB8.agregar);
router.post("/IngresarCliente9", HB9.agregar);
router.post("/IngresarCliente10", HB10.agregar);
router.post("/IngresarCliente11", HB11.agregar);
router.post("/IngresarCliente12", HB12.agregar);
router.post("/IngresarCliente13", HB13.agregar);
router.post("/IngresarCliente14", HB14.agregar);
router.post("/IngresarCliente15", HB15.agregar);
router.post("/IngresarCliente26", CB26.agregar);
router.post("/IngresarCliente27", CB27.agregar);
router.post("/IngresarCliente28", CB28.agregar);
router.post("/IngresarCliente29", CB29.agregar);
router.post("/IngresarCliente30", CB30.agregar);
router.post("/IngresarCliente31", CB31.agregar);
router.post("/IngresarCliente20", CB20.agregar);
router.post("/IngresarCliente21", CB21.agregar);
router.post("/IngresarCliente22", CB22.agregar);
router.post("/IngresarCliente23", CB23.agregar);
router.post("/IngresarCliente24", CB24.agregar);
router.post("/IngresarCliente25", CB25.agregar);

//Rutas de pago de habitacion
//Pagar HB1
router.post("/PagarHB", HB.pagar);
//Pagar HB2
router.post("/PagarHB2", HB2.pagar);
//Pagar HB3
router.post("/PagarHB3", HB3.pagar);
//Pagar HB4
router.post("/PagarHB4", HB4.pagar);
//Pagar HB5
router.post("/PagarHB5", HB5.pagar);
//Pagar HB6
router.post("/PagarHB6", HB6.pagar);
//Pagar HB7
router.post("/PagarHB7", HB7.pagar);
//Pagar HB8
router.post("/PagarHB8", HB8.pagar);
//Pagar HB9
router.post("/PagarHB9", HB9.pagar);
//Pagar HB10
router.post("/PagarHB10", HB10.pagar);
//Pagar HB11
router.post("/PagarHB11", HB11.pagar);
//Pagar HB12
router.post("/PagarHB12", HB12.pagar);
//Pagar HB13
router.post("/PagarHB13", HB13.pagar);
//Pagar HB14
router.post("/PagarHB14", HB14.pagar);
//Pagar HB15
router.post("/PagarHB15", HB13.pagar);
//Pagar CB26
router.post("/PagarCB26", CB26.pagar);
//Pagar CB27
router.post("/PagarCB27", CB27.pagar);
//Pagar CB28
router.post("/PagarCB28", CB28.pagar);
//Pagar CB29
router.post("/PagarCB29", CB29.pagar);
//Pagar CB30
router.post("/PagarCB30", CB30.pagar);
//Pagar CB31
router.post("/PagarCB31", CB31.pagar);
//Pagar CB20
router.post("/PagarCB20", CB20.pagar);
//Pagar CB21
router.post("/PagarCB21", CB21.pagar);
//Pagar CB22
router.post("/PagarCB22", CB22.pagar);
//Pagar CB23
router.post("/PagarCB23", CB23.pagar);
//Pagar CB24
router.post("/PagarCB24", CB24.pagar);
//Pagar CB25
router.post("/PagarCB25", CB25.pagar);

module.exports = router;
