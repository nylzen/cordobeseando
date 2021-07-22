const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuracion las variables de entorno
env = require('dotenv').config();

// Conexion a base de datos
const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.y1fki.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Base conectada'))
  .catch((e) => console.log(e));

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Configuracion de public
app.use(express.static(__dirname + '/public'));

// Configuracion de las rutas de la web
app.use('/', require('./router/rutasWeb'));
app.use('/clientes', require('./router/clientes'));
app.use('/descuento', require('./router/descuento'));

//Configuracion 404
app.use((req, res, next) => {
  res.status(404).render('404', {
    titulo: '404 not found',
    descripcion: 'Titulo',
  });
});

app.listen(port, () => {
  console.log('servidor en el puerto', port);
});
