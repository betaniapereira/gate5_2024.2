require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routers/routers'); // Suas outras rotas
const AuthController = require('./controllers/AuthController'); // Importe o AuthController

const api = express();


// Configurar CORS para permitir a origem correta
api.use(cors({
    origin: '*', // Idealmente, especifique seu domínio de front-end aqui
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Configurando Content-Type como UTF-8 e aplicando políticas de segurança
api.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader("Content-Security-Policy", "default-src 'self'; frame-ancestors 'self'");
    next();
});

api.get('/', (req, res) => {
    res.redirect('/login.html')
})

// Rota de autenticação - Login
api.post('/api/login', AuthController.login);

// Rota de autenticação - Solicitação de redefinição de senha
api.post('/api/request-password-reset', AuthController.requestPasswordReset);

// Rota de autenticação - Redefinir senha
api.post('/api/reset-password', AuthController.resetPassword);

// Usar as outras rotas
api.use('/api', router); // Certifique-se de que o prefixo '/api' está correto para chamadas do front-end

// Iniciar o servidor na porta especificada no .env
const port = process.env.PORT || 4041;
api.listen(port, () => {
    console.log(`API RODANDO NA PORTA ${port}`);
});
