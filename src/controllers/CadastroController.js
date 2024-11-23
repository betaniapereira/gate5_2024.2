const Cadastro = require('../models/Cadastro.js');

class CadastroController {
    async create(req, res) {
        const { 
            teste
        } = req.body;

        try {

            return res.status(200).json(teste)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

}
module.exports = new CadastroController();
