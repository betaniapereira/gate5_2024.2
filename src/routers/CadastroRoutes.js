const express = require('express');
const router = express.Router();
const CadastroController = require('../controllers/CadastroController.js');

router.post('/', CadastroController.create);

module.exports = kokdokeoefkmoem
