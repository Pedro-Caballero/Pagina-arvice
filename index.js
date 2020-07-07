require('./route/config');
const express = require('express');
const server = express();
const routes = require('./route/index');
const path = require("path"); //Para el manejo de las rutas
const notFount = require("./validations/not-fount");
const bodyParser = require("body-parser"); //agregando

server.use(express.static("./public"));

server.use(express.urlencoded({ extended: false })); // lo que recibe el servidor, contiene los datos del formulario
server.use(express.json()); // para que angular los pueda ocupar, en formato json

server.use('/', routes());
server.use(require('./route/send-email')); //enviar correo
server.use(notFount.appNotFound);
server.use(bodyParser.urlencoded({ extended: false }));
server.set("views", path.join(__dirname, "views"));
server.set("view engine", 'ejs');

server.use(express.static(path.join(__dirname, 'public'))); // Carpte unica de mi servidor

server.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto: ', process.env.PORT);
});