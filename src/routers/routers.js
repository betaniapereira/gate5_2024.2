const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const AuthController = require('../controllers/AuthController');
const CadastroRoutes = require('./CadastroRoutes'); // Importa as rotas de cadastro
const verificarAutenticacao = require('../middleware/authMiddleware'); // Middleware para autenticação
const CadastroController = require('../controllers/CadastroController');

// Rota para criar um novo usuário
router.post('/user', UsersController.create);

// Rota para login
router.post('/login', AuthController.login);

// Rota para solicitar recuperação de senha
router.post('/password-reset/request', AuthController.requestPasswordReset);

// Rota para redefinir senha
router.post('/password-reset', AuthController.resetPassword);

// Rotas protegidas (exigem autenticação)
router.get('/users', verificarAutenticacao, UsersController.listUsers);
router.get('/user/:id', verificarAutenticacao, UsersController.listUser);
router.put('/user/:id', verificarAutenticacao, UsersController.updateUser);
router.delete('/user/:id', verificarAutenticacao, UsersController.deleteUser);

// Rotas relacionadas ao módulo de cadastro
router.get('/cadastro', verificarAutenticacao, CadastroController.findAll);


module.exports = router;
