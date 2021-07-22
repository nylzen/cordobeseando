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

/* router.get('/', (req, res) => {
  res.render('descuento', {
    arrayDescuento: [{ id: 'asd', nombre: '123' }],
  });
}); */
module.exports = router;
