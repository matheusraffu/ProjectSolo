var express = require('express');
var router = express.Router();
var participacaoController = require('../controllers/participacaoController');

// Rota para adicionar participação
router.post('/adicionarParticipacao', function (req, res) {
    participacaoController.adicionarParticipacao(req, res);
});

module.exports = router;

