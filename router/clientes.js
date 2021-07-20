const express = require('express');
const router = express.Router();

// requerimiento el modelo Cliente para conectarse a la DB
const Cliente = require('../models/cliente');

// Imprimir todos los datos de la DB en la tabla
router.get('/', async (req, res) => {
  try {
    const arrayClientesDB = await Cliente.find();
    res.render('clientes', {
      arrayClientes: arrayClientesDB,
    });
  } catch (error) {
    console.log(error);
  }
});

// Creacion de la interfaz crear
router.get('/crear', (req, res) => {
  res.render('crear');
});

// Crear un nuevo cliente
router.post('/', async (req, res) => {
  const body = req.body;
  try {
    await Cliente.create(body);
    res.redirect('/clientes');
  } catch (error) {}
  console.log(error);
});

// Ver un unico cliente
router.get('/:id', async (req, res) => {
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
});

module.exports = router;
