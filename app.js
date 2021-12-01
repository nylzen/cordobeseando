const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuracion las variables de entorno
env = require("dotenv").config();

// Conexion a base de datos
const user = "nel";
const pw = "1pJ66SCSiq7jWXtB";
const dbname = "cordobeseando";
const mongoose = require("mongoose");
const uri = `mongodb+srv://${user}:${pw}@cluster0.y1fki.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Base conectada"))
  .catch((e) => console.log(e));

//Motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Configuracion de public
app.use(express.static(__dirname + "/public"));

// Configuracion de las rutas de la web
app.use("/", require("./router/rutasWeb"));
app.use("/clientes", require("./router/clientes"));
app.use("/descuento", require("./router/descuento"));
app.use("/beneficios", require("./router/beneficios"));
app.use("/comercios", require("./router/comercios"));

// CIUDADES
app.use("/ciudad/zarate", require("./router/ciudades/zarate"));
app.use("/ciudad/campana", require("./router/ciudades/campana"));

// CATEGORIAS
// Zarate
app.use(
  "/categorias/zarate/animales",
  require("./router/categorias/zarate/animales")
);
app.use("/categorias/zarate/arte", require("./router/categorias/zarate/arte"));
app.use(
  "/categorias/zarate/bebes",
  require("./router/categorias/zarate/bebes")
);
app.use(
  "/categorias/zarate/belleza",
  require("./router/categorias/zarate/belleza")
);
app.use(
  "/categorias/zarate/caza-pesca",
  require("./router/categorias/zarate/caza-pesca")
);
app.use(
  "/categorias/zarate/comida",
  require("./router/categorias/zarate/comida")
);
app.use(
  "/categorias/zarate/deporte",
  require("./router/categorias/zarate/deporte")
);
app.use(
  "/categorias/zarate/electronica",
  require("./router/categorias/zarate/electronica")
);
app.use(
  "/categorias/zarate/ferreteria-cerrajeria",
  require("./router/categorias/zarate/ferreteria-cerrajeria")
);
app.use(
  "/categorias/zarate/postres",
  require("./router/categorias/zarate/postres")
);
app.use(
  "/categorias/zarate/hogar",
  require("./router/categorias/zarate/hogar")
);
app.use(
  "/categorias/zarate/indumentaria",
  require("./router/categorias/zarate/indumentaria")
);
app.use(
  "/categorias/zarate/inmobiliaria",
  require("./router/categorias/zarate/inmobiliaria")
);
app.use(
  "/categorias/zarate/joyas-accesorios",
  require("./router/categorias/zarate/joyas-accesorios")
);
app.use(
  "/categorias/zarate/kiosco-golosinas",
  require("./router/categorias/zarate/kiosco-golosinas")
);
app.use(
  "/categorias/zarate/librerias",
  require("./router/categorias/zarate/librerias")
);
app.use(
  "/categorias/zarate/naturaleza",
  require("./router/categorias/zarate/naturaleza")
);
app.use(
  "/categorias/zarate/oficios",
  require("./router/categorias/zarate/oficios")
);
app.use(
  "/categorias/zarate/profesiones",
  require("./router/categorias/zarate/profesiones")
);
app.use(
  "/categorias/zarate/rodados",
  require("./router/categorias/zarate/rodados")
);
app.use(
  "/categorias/zarate/salud",
  require("./router/categorias/zarate/salud")
);
app.use(
  "/categorias/zarate/seguros",
  require("./router/categorias/zarate/seguros")
);
app.use(
  "/categorias/zarate/souvenir-cotillon",
  require("./router/categorias/zarate/souvenir-cotillon")
);
app.use(
  "/categorias/zarate/supermercado",
  require("./router/categorias/zarate/supermercado")
);
app.use(
  "/categorias/zarate/tatuajes",
  require("./router/categorias/zarate/tatuajes")
);
app.use(
  "/categorias/zarate/traslados",
  require("./router/categorias/zarate/traslados")
);
app.use(
  "/categorias/zarate/videojuegos",
  require("./router/categorias/zarate/videojuegos")
);

// Campana
app.use(
  "/categorias/campana/animales",
  require("./router/categorias/campana/animales")
);
app.use(
  "/categorias/campana/arte",
  require("./router/categorias/campana/arte")
);
app.use(
  "/categorias/campana/bebes",
  require("./router/categorias/campana/bebes")
);
app.use(
  "/categorias/campana/belleza",
  require("./router/categorias/campana/belleza")
);
app.use(
  "/categorias/campana/caza-pesca",
  require("./router/categorias/campana/caza-pesca")
);
app.use(
  "/categorias/campana/comida",
  require("./router/categorias/campana/comida")
);
app.use(
  "/categorias/campana/deporte",
  require("./router/categorias/campana/deporte")
);
app.use(
  "/categorias/campana/electronica",
  require("./router/categorias/campana/electronica")
);
app.use(
  "/categorias/campana/ferreteria-cerrajeria",
  require("./router/categorias/campana/ferreteria-cerrajeria")
);
app.use(
  "/categorias/campana/postres",
  require("./router/categorias/campana/postres")
);
app.use(
  "/categorias/campana/hogar",
  require("./router/categorias/campana/hogar")
);
app.use(
  "/categorias/campana/indumentaria",
  require("./router/categorias/campana/indumentaria")
);
app.use(
  "/categorias/campana/inmobiliaria",
  require("./router/categorias/campana/inmobiliaria")
);
app.use(
  "/categorias/campana/joyas-accesorios",
  require("./router/categorias/campana/joyas-accesorios")
);
app.use(
  "/categorias/campana/kiosco-golosinas",
  require("./router/categorias/campana/kiosco-golosinas")
);
app.use(
  "/categorias/campana/librerias",
  require("./router/categorias/campana/librerias")
);
app.use(
  "/categorias/campana/naturaleza",
  require("./router/categorias/campana/naturaleza")
);
app.use(
  "/categorias/campana/oficios",
  require("./router/categorias/campana/oficios")
);
app.use(
  "/categorias/campana/profesiones",
  require("./router/categorias/campana/profesiones")
);
app.use(
  "/categorias/campana/rodados",
  require("./router/categorias/campana/rodados")
);
app.use(
  "/categorias/campana/salud",
  require("./router/categorias/campana/salud")
);
app.use(
  "/categorias/campana/seguros",
  require("./router/categorias/campana/seguros")
);
app.use(
  "/categorias/campana/souvenir-cotillon",
  require("./router/categorias/campana/souvenir-cotillon")
);
app.use(
  "/categorias/campana/supermercado",
  require("./router/categorias/campana/supermercado")
);
app.use(
  "/categorias/campana/tatuajes",
  require("./router/categorias/campana/tatuajes")
);
app.use(
  "/categorias/campana/traslados",
  require("./router/categorias/campana/traslados")
);
app.use(
  "/categorias/campana/videojuegos",
  require("./router/categorias/campana/videojuegos")
);

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
