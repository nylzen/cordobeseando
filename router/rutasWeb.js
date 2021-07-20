const express = require('express');
const router = express.Router();

// Ruta Raiz
router.get('/', (req, res) => {
  res.render('index', { titulo: 'mi titulo dinamico' });
});

// Ruta Descuento
router.get('/descuento', (req, res) => {
  res.render('descuento');
});

module.exports = router;
