require('dotenv').config(); // Carregar variáveis de ambiente do .env

const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./routers/routers'); // Importar rotas principais
const AuthController = require('./controllers/AuthController'); // Importar AuthController

const api = express();

// Servir arquivos estáticos da pasta 'public'
api.use(express.static(path.join(__dirname, 'public')));

// Permitir o uso de JSON no corpo das requisições
api.use(express.json());

// Configurar CORS para aceitar requisições de origens específicas
api.use(
    cors({
        origin: '*', // Substitua por um domínio confiável em produção
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

// Configurar cabeçalhos adicionais para segurança e codificação UTF-8
api.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader("Content-Security-Policy", "default-src 'self'; frame-ancestors 'self'");
    next();
});

// Rota inicial redirecionando para a página de login
api.get('/', (req, res) => {
    res.redirect('/login.html');
});

api.get('/', (req, res) => {
    res.redirect('/usuario.html');
});

api.get('/', (req, res) => {
    res.redirect('/cadastro.html');
});

// Rotas de autenticação
api.post('/login', AuthController.login); // Rota para login
api.post('/usuario', AuthController.usuario); // Rota para usuario
api.post('/cadastro', AuthController.usuario); // Rota para cadastro
api.post('/request-password-reset', AuthController.requestPasswordReset); // Solicitar redefinição de senha
api.post('/reset-password', AuthController.resetPassword); // Redefinir senha

// Rotas principais
api.use('/api', router); // Rotas definidas no arquivo routers.js

// Rota de teste (opcional, para verificar o servidor)
api.get('/test', (req, res) => {
    res.status(200).json({ message: 'Servidor está funcionando!' });
});

// Tratamento para rotas não encontradas
api.use((req, res) => {
    res.status(404).json({ message: 'Rota não encontrada.' });
});

// Configuração de porta e inicialização do servidor
const port = process.env.PORT || 4041;
api.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
    console.log(`Acesse em: http://localhost:${port}`);
});
