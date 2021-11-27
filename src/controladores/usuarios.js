const knex = require('../conexao');
const bcrypt = require('bcrypt');
const schemaCadastroUsuario = require('../validacoes/schemaCadastroUsuario');

const cadastrarUsuarios = async (req, res) => {
    const {nome, email, senha, telefone} = req.body;

    try {

        await schemaCadastroUsuario.validate(req.body)

        const verificarEmail = await knex('usuarios').where({email}).first();

        if (verificarEmail) {
            return res.status(400).json("Esse email já foi cadastrado");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = await knex('usuarios').insert({
            nome,
            email,
            senha: senhaCriptografada,
            telefone
        });
        if (!usuario) {
            return res.status(400).json("O usuário não foi cadastrado.");
        }

        return res.status(200).json(usuario[0]);
        
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarUsuarios
}