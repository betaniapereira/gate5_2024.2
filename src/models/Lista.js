const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Conexão com o banco de dados na AWS
const sequelize = new Sequelize('bd_agradef1', 'username', 'password', {
    host: 'seu-endereco-do-banco.rds.amazonaws.com',
    dialect: 'mysql',
});

// Definição do modelo de Usuário
const Usuario = sequelize.define('Usuario', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'cadastro', // Nome da tabela no banco
    timestamps: false       // Se a tabela não tiver campos de timestamp
});

// Testando a conexão
sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados com sucesso.'))
    .catch(err => console.error('Erro ao conectar ao banco:', err));

const app = express();

// Rota para buscar os nomes dos usuários
app.get('/usuarios', async (req, res) => {
    try {
        // Busca apenas os nomes da tabela cadastro
        const usuarios = await Usuario.findAll({
            attributes: ['name'] // Só traz o campo 'name'
        });
        res.json(usuarios); // Retorna os dados como JSON
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
});

// Servidor rodando
const PORT = 4041;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
