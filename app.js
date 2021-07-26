const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuracion las variables de entorno
env = require('dotenv').config();

// Conexion a base de datos
const user = 'nel';
const pw = '1pJ66SCSiq7jWXtB';
const dbname = 'cordobeseando';
const mongoose = require('mongoose');
const uri = `mongodb+srv://${user}:${pw}@cluster0.y1fki.mongodb.net/${dbname}?retryWrites=true&w=majority`;

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
app.use('/beneficios', require('./router/beneficios'));

// CATEGORIAS
app.use('/categorias/animales', require('./router/categorias/animales'));
app.use('/categorias/arte', require('./router/categorias/arte'));
app.use('/categorias/automotor', require('./router/categorias/automotor'));



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
