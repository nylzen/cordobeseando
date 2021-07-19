const express = require("express");
const app = express();
const port = 3000;

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
