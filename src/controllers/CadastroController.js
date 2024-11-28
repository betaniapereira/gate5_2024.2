const Cadastro = require('../models/Cadastro'); // Modelo de Cadastro

class CadastroController {
    // Função para adicionar um novo aluno
    async create(req, res) {
        console.log("ENVIEI: ");
        console.log(req);
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
            // Insere os dados no banco de dados
            const novoCadastro = await Cadastro.create({
                NOME,
                ANO,
                ENDERECO,
                FELIACAOPAI,
                FELIACAOMAE,
                RESPONSAVEL,
                TELEFONERESPONSAVEL,
                DATA_MODIFICACAO
            });

            // Resposta de sucesso
            return res.status(201).json({ 
                message: 'Cadastro criado com sucesso!', 
                cadastro: novoCadastro 
            });
        } catch (error) {
            console.error('Erro ao criar cadastro:', error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    // Função para listar todos os usuários
    async findAll(req, res) {
        try {
            const usuarios = await Cadastro.findAll(); // Recupera todos os cadastros
            return res.status(200).json(usuarios);
        } catch (error) {
            console.error('Erro ao listar usuários:', error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
}

module.exports = new CadastroController();
