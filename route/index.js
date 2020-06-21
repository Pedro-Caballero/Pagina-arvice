const express = require('express');
const routes = express.Router();
const appController = require('../controller/appController');
// const fs = require("fs");

// const inicio = fs.readFileSync("index.html");
// const quines_somos = fs.readFileSync('quienes-somos.html');
// const oferta_academica = fs.readFileSync('oferta-academica.html');
// const nuevo_ingreso = fs.readFileSync('nuevo-ingreso.html');
// const modalidad = fs.readFileSync('modalidad.html');
// const comunidad = fs.readFileSync('comunidad.html');
// const contacto = fs.readFileSync('contacto.html');

// routes.use(express.static("./public"));

module.exports = function() {

    routes.get("/", appController.index);
    routes.get("/quienes-somos", appController.quienes);
    routes.get("/oferta-academica", appController.oferta);
    routes.get("/nuevo-ingreso", appController.nuevo);
    routes.get("/modalidad-educativa", appController.modalidad);
    routes.get("/comunidad-estudiantil", appController.comunidad);
    routes.get("/contacto", appController.contacto);

    // routes.get('/', (req, res) => {
    //     res.write(inicio);
    // })
    // routes.get('/quienes-somos', (req, res) => {
    //     res.write(quines_somos)
    // })
    // routes.get('/oferta-academica', (req, res) => {
    //     res.write(oferta_academica)
    // })
    // routes.get('/nuevo-ingreso', (req, res) => {
    //     res.write(nuevo_ingreso)
    // })
    // routes.get('/modalidad-educativa', (req, res) => {
    //     res.write(modalidad)
    // })
    // routes.get('/comunidad-estudiantil', (req, res) => {
    //     res.write(comunidad)
    // })
    // routes.get('/contacto', (req, res) => {
    //     res.write(contacto)
    // })

    return routes;
}