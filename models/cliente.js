const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema de la base de datos
const clienteSchema = new Schema({
  nombre: String,
  rubro: String,
  direccion: String,
  telefono: String,
  descuento: String,
  descuento2: String,
  dtocirculo: String,
  fb: String,
  ig: String,
  web: String,
  imgURL: String,
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
