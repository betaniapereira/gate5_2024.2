const express = require('express');
const CadastroController = require('../controllers/CadastroController'); // Certifique-se que está correto

const router = express.Router();

// Corrigido para chamar a função "create" que está no CadastroController
router.post('/usuario', CadastroController.create); // Rota para adicionar um aluno (certifique-se que a função está correta no controller)
router.get('/usuario', CadastroController.findAll); // Rota para listar todos os usuario (precisa de uma função findAll no controller)

module.exports = router; // Exporta o roteador
