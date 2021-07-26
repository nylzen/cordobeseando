const express = require('express');
const router = express.Router();

// requerimiento del modelo Cliente para conectarse a la DB
const Cliente = require('../../models/cliente');

// Imprimir todos los datos de la DB en la tabla
router.get('/', async (req, res) => {
  try {
    const arrayClientesDB = await Cliente.find();
    res.render('categorias/souvenir-cotillon', {
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

    res.render('categorias/souvenir-cotillon', {
      cliente: clienteDB,
      error: false,
    });
  } catch (error) {
    res.render('souvenir-cotillon', {
      error: true,
      mensaje: 'No se encontro el ID especificado',
    });
  }
});

module.exports = router;
