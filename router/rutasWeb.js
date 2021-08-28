const express = require("express");
const router = express.Router();

// Ruta Raiz
router.get("/", (req, res) => {
  res.render("index");
});

// Ruta Quienes Somos
router.get("/quienes-somos", (req, res) => {
  res.render("quienes-somos");
});

// Ruta FAQ
router.get("/preguntas-frecuentes", (req, res) => {
  res.render("preguntas-frecuentes");
});

// Ruta Pagos
router.get("/suscripciones", (req, res) => {
  res.render("suscripciones");
});

// Ruta FAQ Clientes
router.get("/preguntas-frecuentes-clientes", (req, res) => {
  res.render("preguntas-frecuentes-clientes");
});

// Ruta Pagos
router.get("/preguntas-frecuentes-suscriptores", (req, res) => {
  res.render("preguntas-frecuentes-suscriptores");
});

// Ruta Obtener beneficios
router.get("/obtener-beneficios", (req, res) => {
  res.render("obtener-beneficios");
});

// Ruta Radio
router.get("/radio", (req, res) => {
  res.render("radio");
});
module.exports = router;
