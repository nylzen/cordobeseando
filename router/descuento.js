const express = require("express");
const router = express.Router();

// requerimiento del modelo Cliente para conectarse a la DB
const Cliente = require("../models/cliente");

// Ver un unico cliente
router.get("/:slug", async (req, res) => {
  const slug = req.params.slug;
  try {
    const clienteDB = await Cliente.findOne({ slug });

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

// Imprimir todos los datos de la DB en la tabla
router.get("/", async (req, res) => {
  try {
    const arrayClientesDB = await Cliente.find();
    res.render("descuento", {
      arrayClientes: arrayClientesDB,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
