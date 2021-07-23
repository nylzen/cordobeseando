const express = require("express");
const router = express.Router();

// Ruta Raiz
router.get("/", (req, res) => {
  res.render("index");
});

// Ruta Descuento
/* router.get('/descuento', (req, res) => {
  res.render('descuento');
}); */

// Ruta Beneficios
router.get("/beneficios", (req, res) => {
  res.render("beneficios");
});

// Ruta Comercios
router.get("/comercios", (req, res) => {
  res.render("comercios");
});

module.exports = router;
