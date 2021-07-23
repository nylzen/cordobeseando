const express = require('express');
const router = express.Router();

// Ruta Raiz
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/descuento', (req, res) => {
  res.render('descuento');
});

// Ruta Comercios
router.get('/comercios', (req, res) => {
  res.render('comercios');
});

// Subir Imagenes a Cloudinary
router.post('/crear', (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send('recibido');
});

module.exports = router;
