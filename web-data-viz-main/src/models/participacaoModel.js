var database = require("../database/config")

function addParticipacao(id_usuario, id_evento) {
    console.log("ACESSEI O PARTICIPAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function addParticipacao():", id_usuario, id_evento);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO participacao (id_usuario, id_evento) VALUES ('${id_usuario}', '${id_evento}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    addParticipacao
};