var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            id: resultadoAutenticar[0].id,
                            idade: resultadoAutenticar[0].idade,
                            senha: resultadoAutenticar[0].senha,
                            idLifeGroup: resultadoAutenticar[0].idLifeGroup

                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log("entrei no cadastro: ");
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var idade = req.body.idadeServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, idade)
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
}


function ReceberDadosEventos(req, res) {

    var idLifeGroup = req.body.idLifeGroupServer;


    usuarioModel.ReceberDadosEventos(idLifeGroup)
        .then(
            function (resultado) {
                console.log(`Retornei com os dados do evento`, resultado)
                res.json({
                    data_evento: resultado[0].DataEvento,
                    qtd_pessoas: resultado[0].QuantidadePessoas,
                    id_evento: resultado[0].idEvento,
                });
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

function QuantidadePessoas(req, res) {

    var idLifeGroup = req.body.idLifeGroupServer;


    usuarioModel.QuantidadePessoas(idLifeGroup)
        .then(
            function (resultado) {
                console.log(`Retornei com os dados do evento`, resultado)
                res.json({
                    QuantidadePessoas: resultado[0].MediaIdade,
                });
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


function MediaIdade(req, res) {

    var idLifeGroup = req.body.idLifeGroupServer;


    usuarioModel.MediaIdade(idLifeGroup)
        .then(
            function (resultado) {
                console.log(`Retornei com os dados do evento`, resultado)
                res.json({
                    MediaIdade: resultado[0].MediaIdade,
                });
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
    autenticar,
    cadastrar,
    ReceberDadosEventos,
    MediaIdade,
    QuantidadePessoas
}