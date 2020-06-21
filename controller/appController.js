const { response } = require('express');

exports.index = (req, res) => {
    res.render("index");
}
exports.quienes = (req, res) => {
    res.render("quienes");
}
exports.oferta = (req, res) => {
    res.render("oferta");
}
exports.nuevo = (req, res) => {
    res.render("nuevo");
}
exports.modalidad = (req, res) => {
    res.render("modalidad");
}
exports.comunidad = (req, res) => {
    res.render("comunidad");
}
exports.contacto = (req, res) => {
    res.render("contacto");
}