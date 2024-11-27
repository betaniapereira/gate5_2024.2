const knex = require('../data/conection');
const bcrypt = require('bcrypt');

class Cadastro {
    /**
     * insere o cadastro no banco de dados.
     * @param {string} NOME - Nome da pessoa.
     * @param {string} ANO - Ano de nascimento.
     * @param {string} ENDERECO - Endereço da pessoa.
     * @param {string} FELIACAOPAI - Nome do pai.
     * @param {string} FELIACAOMAE - Nome da mãe.
     * @param {string} RESPONSAVEL - Nome do responsável.
     * @param {string} TELEFONERESPONSAVEL - Telefone do responsável.
     * @param {string} DATA_MODIFICACAO - Data de modificação do cadastro.
     * @returns {number} Status da operação (200 para sucesso, 404 para falha).
     */
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
            console.error('Erro ao criar cadastro:', error);
            return 404;
        }
    }

    /**
     * Busca um cadastro pelo ID.
     * @param {number} idCADASTRO - ID do cadastro.
     * @returns {object|null} Retorna o cadastro encontrado ou null.
     */
    async findByUserId(idCADASTRO) {
        try {
            const cadastro = await knex('cadastro').where({ id: idCADASTRO }).first();
            if (cadastro) {
                return cadastro;
            }
            return null;
        } catch (error) {
            console.error('Erro ao buscar cadastro:', error);
            return null;
        }
    }
}

module.exports = new Cadastro();
