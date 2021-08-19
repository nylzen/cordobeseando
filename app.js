const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;
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
app.use('/comercios', require('./router/comercios'));

// CATEGORIAS
app.use('/categorias/animales', require('./router/categorias/animales'));
app.use('/categorias/arte', require('./router/categorias/arte'));
app.use('/categorias/bebes', require('./router/categorias/bebes'));
// ======= //
app.use('/categorias/belleza', require('./router/categorias/belleza'));
app.use('/categorias/caza-pesca', require('./router/categorias/caza-pesca'));
app.use('/categorias/comida', require('./router/categorias/comida'));
app.use('/categorias/deporte', require('./router/categorias/deporte'));
// ======= //
app.use('/categorias/electronica', require('./router/categorias/electronica'));
app.use(
  '/categorias/ferreteria-cerrajeria',
  require('./router/categorias/ferreteria-cerrajeria')
);
app.use('/categorias/postres', require('./router/categorias/postres'));
app.use('/categorias/hogar', require('./router/categorias/hogar'));
// ======= //
app.use(
  '/categorias/indumentaria',
  require('./router/categorias/indumentaria')
);
app.use(
  '/categorias/inmobiliaria',
  require('./router/categorias/inmobiliaria')
);
app.use(
  '/categorias/joyas-accesorios',
  require('./router/categorias/joyas-accesorios')
);
app.use(
  '/categorias/kiosco-golosinas',
  require('./router/categorias/kiosco-golosinas')
);
// ======= //
app.use('/categorias/librerias', require('./router/categorias/librerias'));
app.use('/categorias/naturaleza', require('./router/categorias/naturaleza'));
app.use('/categorias/oficios', require('./router/categorias/oficios'));
app.use('/categorias/profesiones', require('./router/categorias/profesiones'));
// ======= //

app.use('/categorias/rodados', require('./router/categorias/rodados'));
app.use('/categorias/salud', require('./router/categorias/salud'));
app.use('/categorias/seguros', require('./router/categorias/seguros'));
// ======= //
app.use(
  '/categorias/souvenir-cotillon',
  require('./router/categorias/souvenir-cotillon')
);
app.use(
  '/categorias/supermercado',
  require('./router/categorias/supermercado')
);
app.use('/categorias/tatuajes', require('./router/categorias/tatuajes'));
app.use('/categorias/traslados', require('./router/categorias/traslados'));
// ======= //
app.use('/categorias/videojuegos', require('./router/categorias/videojuegos'));

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
