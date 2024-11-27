var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email, idade, idLifeGroup FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, idade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, idade);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, idade) VALUES ('${nome}', '${email}', '${senha}', '${idade}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ReceberDadosEventos(idLifeGroup) {
    
    var instrucaoSql = `
SELECT DISTINCT e.id_evento as idEvento, e.qtd_pessoas as QuantidadePessoas, e.data_evento as DataEvento FROM evento e JOIN usuario u ON u.idLifeGroup = e.fkLifeGroup where e.fkLifeGroup = '${idLifeGroup}' ;
`;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    ;
}

function MediaIdade(idLifeGroup) {
    
    var instrucaoSql = `
SELECT round(avg(idade)) as MediaIdadeLife from usuario where idLifeGroup = '${idLifeGroup}' ;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    ;
}


module.exports = {
    autenticar,
    cadastrar,
    ReceberDadosEventos,
    MediaIdade
};