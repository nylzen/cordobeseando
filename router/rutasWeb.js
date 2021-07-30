const express = require('express');
const router = express.Router();

// Ruta Raiz
router.get('/', (req, res) => {
  res.render('index');
});

// Ruta Comercios
router.get('/comercios', (req, res) => {
  res.render('comercios');
});

// Ruta Quienes Somos
router.get('/quienes-somos', (req, res) => {
  res.render('quienes-somos');
});


module.exports = router;
