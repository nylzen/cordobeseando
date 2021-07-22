const express = require('express');
const router = express.Router();

// requerimiento del modelo Cliente para conectarse a la DB
const Cliente = require('../models/cliente');

// Imprimir todos los datos de la DB en la tabla
router.get('/', async (req, res) => {
  try {
    const arrayClientesDB = await Cliente.find();
    res.render('descuento', {
      arrayClientes: arrayClientesDB,
    });
  } catch (error) {
    console.log(error);
  }
});

// Ver un unico cliente
/* router.get('descuento/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const clienteDB = await Cliente.findOne({ _id: id });

    res.render('detalle', {
      cliente: clienteDB,
      error: false,
    });
  } catch (error) {
    res.render('detalle', {
      error: true,
      mensaje: 'No se encontro el ID especificado',
    });
  }
}); */

/* router.get('/', (req, res) => {
  res.render('descuento', {
    arrayClientes: [{ id: 'asd', nombre: '123' }],
  });
}); */
module.exports = router;
