const knex = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const segredo = require('../segredo');
const schemaLogin = require('../validacoes/shemaLogin');

const login = async (req, res) => {

    const {email, senha} = req.body;

    try {
        
        await schemaLogin.validate(req.body);

        const usuario = await knex('usuarios').where({ email }).first();

        if (!usuario) {
            return res.status(404).json('O usuario não foi encontrado');
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(400).json("Email e senha não confere");
        }

        const token = jwt.sign({ id: usuario.id }, segredo, { expiresIn: '8h' });

        const { senha: _, ...dadosUsuario } = usuario;

        return res.status(200).json({
            usuario: dadosUsuario,
            token
        });

    } catch (error) {
        return res.status(400).json(error.message);
    }

}

module.exports = {
    login
}