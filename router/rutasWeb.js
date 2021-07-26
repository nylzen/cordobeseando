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


module.exports = router;
