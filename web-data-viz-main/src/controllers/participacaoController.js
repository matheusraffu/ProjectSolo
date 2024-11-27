var participacaoModel = require("../models/participacaoModel");


function adicionarParticipacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log("entrei no Adicionar Participação: ");
    var id_usuario = req.body.id_usuario; 
     console.log(id_usuario);
    var id_evento = req.body.id_evento;
    console.log(id_evento);
    // Faça as validações dos valores
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        participacaoModel.addParticipacao(id_usuario, id_evento)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


    module.exports = {
        adicionarParticipacao
    }