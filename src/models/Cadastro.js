const knex = require('../data/conection');

class Cadastro {
    async create(name, birthdate, address, father, mother, responsable, phone) {
        try {
            const [id] = await knex('cadastro').insert({
                NOME: name,
                ANO: birthdate,
                ENDERECO: address,
                FILIACAOPAI: father,
                FILIACAOMAE: mother,
                RESPONSAVEL: responsable,
                TELEFONERESPONSAVEL: name,
                DATA_MODIFICACAO: null
            });
            return { id };
        } catch (error) {
            console.error('Erro ao criar cadastro:', error.message);
            throw new Error('Erro ao criar cadastro.');
        }
    }

    async findByUserId(idCADASTRO) {
        try {
            return await knex('cadastro').where({ id: idCADASTRO }).first() || null;
        } catch (error) {
            console.error('Erro ao buscar cadastro:', error.message);
            throw new Error('Erro ao buscar cadastro.');
        }
    }

    async findAll() {
        try {
            return await knex('cadastro').select('*');
        } catch (error) {
            console.error('Erro ao buscar cadastros:', error.message);
            throw new Error('Erro ao buscar cadastros.');
        }
    }

    async update(id, data) {
        try {
            const rowsAffected = await knex('cadastro').where({ id }).update(data);
            return rowsAffected > 0;
        } catch (error) {
            console.error('Erro ao atualizar cadastro:', error.message);
            throw new Error('Erro ao atualizar cadastro.');
        }
    }

    async delete(id) {
        try {
            const rowsAffected = await knex('cadastro').where({ id }).del();
            return rowsAffected > 0;
        } catch (error) {
            console.error('Erro ao excluir cadastro:', error.message);
            throw new Error('Erro ao excluir cadastro.');
        }
    }
}

module.exports = new Cadastro();
