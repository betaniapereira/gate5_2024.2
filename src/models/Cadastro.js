const knex = require('../data/conection');
const bcrypt = require('bcrypt');

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

    async getAllCadastros {
        try {
            let usersList = await knex.select(['NOME']).table('cadastro');
            if (usersList.length > 0) {
                return usersList;
            } else {
                return undefined;
            }
        } catch (error) {
            console.log(error);
            return 404;
        }
    }
}

module.exports = new Cadastro();