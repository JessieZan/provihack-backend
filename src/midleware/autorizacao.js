const conexao = require('./conexao');
const jwt = require('jsonwebtoken');
const segredo = require('./segredo');

const verificaLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401).json({mensagem: "O token não foi informado"});
    }

    try {

        const token = authorization.replace('Bearer', '').trim();

        const {id} = jwt.verify(token, segredo);

        const query = 'select * from usuarios where id = $1';
        const {rows, rowCount} = await conexao.query(query, [id]);

        if (rowCount === 0){
            return res.status(404).json({mensagem: 'O usuario não foi encontrado'})
        }

        const {senha, ...usuario} = rows[0];

        req.usuario = usuario;

        next();
        
    } catch (error) {
        return res.status(401).json({mensagem: "Para acessar este recurso um token de autenticação válido deve ser enviado."});
    }

}

module.exports = verificaLogin
