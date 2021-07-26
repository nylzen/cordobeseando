const express = require('express');
const router = express.Router();

// requerimiento del modelo Cliente para conectarse a la DB
const Cliente = require('../../models/cliente');

// Imprimir todos los datos de la DB en la tabla
router.get('/', async (req, res) => {
  try {
    const arrayClientesDB = await Cliente.find();
    res.render('categorias/oficios', {
      arrayClientes: arrayClientesDB,
    });
  } catch (error) {
    console.log(error);
  }
});

// 
router.get('/', async (req, res) => {
  const rubro = req.params.rubro;
  try {
    const clienteDB = await Cliente.findOne({ rubro: rubro });

    res.render('categorias/oficios', {
      cliente: clienteDB,
      error: false,
    });
  } catch (error) {
    res.render('oficios', {
      error: true,
      mensaje: 'No se encontro el ID especificado',
    });
  }
});

module.exports = router;
