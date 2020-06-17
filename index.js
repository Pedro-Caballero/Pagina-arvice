const express = require('express');
const server = express();
const routes = require('./route/index');

server.use('/', routes());

// var port = process.env.port || 8080;

server.listen('8080', () => {
    console.log('Servidor corriendo en el puerto: 8080');
})