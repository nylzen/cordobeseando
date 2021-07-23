const express = require("express");
const router = express.Router();

// requerimiento del modelo Cliente para conectarse a la DB
const Cliente = require("../models/cliente");

// Ver un unico cliente
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const clienteDB = await Cliente.findOne({ _id: id });

    res.render("descuento", {
      cliente: clienteDB,
      error: false,
    });
  } catch (error) {
    res.render("descuento", {
      error: true,
      mensaje: "No se encontro el ID especificado",
    });
  }
});

module.exports = router;
