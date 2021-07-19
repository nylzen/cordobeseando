const express = require("express");
const router = express.Router();

const Cliente = require('../models/cliente')


router.get("/", async (req, res) => {

  try {
    const arrayClientesDB = await Cliente.find()
    res.render("clientes", {
      arrayClientes: arrayClientesDB
    })
  } catch (error) {
    console.log(error)
  }

});

module.exports = router;
