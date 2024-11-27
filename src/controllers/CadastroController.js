const Cadastro = require('../models/Cadastro'); // Modelo de Cadastro

class CadastroController {
    // Função para adicionar um novo aluno
    async create(req, res) {
        const { 
            NOME, 
            ANO, 
            ENDERECO, 
            FELIACAOPAI, 
            FELIACAOMAE, 
            RESPONSAVEL, 
            TELEFONERESPONSAVEL, 
            DATA_MODIFICACAO 
        } = req.body;

        try {
            const status = await Cadastro.create(NOME, ANO, ENDERECO, FELIACAOPAI, FELIACAOMAE, RESPONSAVEL, TELEFONERESPONSAVEL, DATA_MODIFICACAO);
            
            if (status === 200) {
                return res.status(200).json({ message: 'Cadastro criado com sucesso!' });
            } else {
                return res.status(400).json({ message: 'Erro ao criar cadastro.' });
            }
        } catch (error) {
            console.error('Erro ao criar cadastro:', error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    // Função para listar todos os userong
    async findAll(req, res) {
        try {
            const userong = await Cadastro.findAll(); // Supondo que você tenha um método findAll no seu modelo
            return res.status(200).json(userong);
        } catch (error) {
            console.error('Erro ao listar userong:', error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}

module.exports = new CadastroController();
