const express = require("express");
const router = express.Router();

// requerimiento del modelo Cliente para conectarse a la DB
const Cliente = require("../models/cliente");

// Imprimir todos los datos de la DB en la tabla
router.get("/", async (req, res) => {
  try {
    const arrayClientesDB = await Cliente.find();
    res.render("beneficios", {
      arrayClientes: arrayClientesDB,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
