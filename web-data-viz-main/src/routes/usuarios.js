var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

//Requisição e resposta

router.post("/ReceberDadosEventos", function (req, res) {
    usuarioController.ReceberDadosEventos(req, res);
})
module.exports = router;

router.post("/MediaIdade", function (req, res) {
    usuarioController.MediaIdade(req, res);
})

module.exports = router;

router.post("/QuantidadePessoas", function (req, res) {
    usuarioController.QuantidadePessoas(req, res);
})

module.exports = router;