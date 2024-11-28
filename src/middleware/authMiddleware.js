const jwt = require('jsonwebtoken'); // Verifica se o token JWT é válido

function verificarAutenticacao(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]; // Extrai apenas o token

    if (!token) {
        return res.status(401).json({ message: 'Acesso negado: token não fornecido.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido ou expirado.' });
        }

        req.usuario = decoded; // Adiciona o usuário decodificado à requisição
        next(); // Continua para o próximo middleware ou rota
    });
}


module.exports = verificarAutenticacao;
