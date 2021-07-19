const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("clientes", {
    arrayClientes: [
      { id: "1j1j1", nombre: "Rrr", descripcion: "unonununun" },
      { id: "456", nombre: "222s", descripcion: "asdfgasf" },
      { id: "1233", nombre: "hhhh", descripcion: "ASDffff" },
    ],
  });
});

module.exports = router;
