const express = require("express");
const router = express.Router();

// requerimiento del modelo Cliente para conectarse a la DB
const Cliente = require("../../models/cliente");

// Imprimir todos los datos de la DB en la tabla
router.get("/", async (req, res) => {
  try {
    const arrayClientesDB = await Cliente.find();
    res.render("ciudades/zarate", {
      arrayClientes: arrayClientesDB,
    });
  } catch (error) {
    console.log(error);
  }
});

//
router.get("/", async (req, res) => {
  const ciudad = req.params.ciudad;
  try {
    const clienteDB = await Cliente.findOne({ ciudad });

    res.render("ciudad/zarate", {
      cliente: clienteDB,
      error: false,
    });
  } catch (error) {
    res.render("zarate", {
      error: true,
      mensaje: "No se encontro el ID especificado",
    });
  }
});

module.exports = router;
