const express = require("express");
const router = express.Router();

// requerimiento el modelo Cliente para conectarse a la DB
const Cliente = require("../models/cliente");

// Imprimir todos los datos de la DB en la tabla
router.get("/", async (req, res) => {
  try {
    const arrayClientesDB = await Cliente.find();
    res.render("clientes", {
      arrayClientes: arrayClientesDB,
    });
  } catch (error) {
    console.log(error);
  }
});

// Creacion de la interfaz crear
router.get("/crear", (req, res) => {
  res.render("crear");
});

// Crear un nuevo cliente
router.post("/", async (req, res) => {
  const body = req.body;
  try {
    await Cliente.create(body);
    res.redirect("/clientes");
  } catch (error) {}
  //console.log(error);
});

// Ver un unico cliente
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const clienteDB = await Cliente.findOne({ _id: id });

    res.render("detalle", {
      cliente: clienteDB,
      error: false,
    });
  } catch (error) {
    res.render("detalle", {
      error: true,
      mensaje: "No se encontro el ID especificado",
    });
  }
});

// Eliminar un cliente de la DB
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const clienteDB = await Cliente.findByIdAndDelete({ _id: id });

    if (clienteDB) {
      res.json({
        estado: true,
        mensaje: "eliminado",
      });
    } else {
      res.json({
        estado: false,
        mensaje: "No se pudo eliminar",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const clientesDB = await Cliente.findByIdAndUpdate(id, body, {
      useFindAndModify: false,
    });
    //console.log(clientesDB);

    res.json({
      estado: true,
      mensaje: "editado",
    });
  } catch (error) {
    console.log(error);
    res.json({
      estado: false,
      mensaje: "Fallo al editar",
    });
  }
});

// Ver un unico cliente para DESCUENTO
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
module.exports = router;
