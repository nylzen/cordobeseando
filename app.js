const express = require("express");
const app = express();
env = require('dotenv').config;
const port = process.env.PORT || 3000;

// Conexion a base de datos
const mongoose = require('mongoose');
const user = 'cordobeseando_admin'
const password = '2CcFlfGtqC5G4shw'
const dbname = 'cordobeseando'
const uri = `mongodb+srv://${user}:${password}@cluster0.y1fki.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Base conectada'))
.catch(e => console.log(e))



//Motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Configuracion de public
app.use(express.static(__dirname + "/public"));

// Configuracion de las rutas de la web
app.use("/", require("./router/rutasWeb"));
app.use("/clientes", require("./router/clientes"));

//Configuracion 404
app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404 not found",
    descripcion: "Titulo",
  });
});

app.listen(port, () => {
  console.log("servidor en el puerto", port);
});
