const knex = require('../data/conection');

class Atividade {
    async create() {
        try {
            

            return 200;
        } catch (error) {
            console.log(error);
            return 404;
        }
    }

    async findByUserId(userId) {
        try {
            
        } catch (error) {
            console.log(error);
            return 404;
        }
    }
}

module.exports = new Atividade();
