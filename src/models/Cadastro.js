const knex = require('../data/conection');

class Cadastro {
    async create(NOME, ANO, ENDERECO, FELIACAOPAI, FELIACAOMAE, RESPONSAVEL, TELEFONERESPONSAVEL, DATA_MODIFICACAO) {
        try {
            await knex.insert({
                nome: NOME,
                nascimento: ANO,
                endereco: ENDERECO,
                pai: FELIACAOPAI,
                mae: FELIACAOMAE,
                responsavel: RESPONSAVEL,
                telefone: TELEFONERESPONSAVEL,
                modificacao: DATA_MODIFICACAO
            }).table('cadastro');

            return 200;
        } catch (error) {
            console.log(error);
            return 404;
        }
    }

    async findByUserId(idCADASTRO) {
        try {

        } catch (error) {
            console.log(error);
            return 404;
        }
    }
}

module.exports = new Cadastro();