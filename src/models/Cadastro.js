const knex = require('../data/conection');

class Cadastro {
   

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