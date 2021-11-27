const conexao = require('./conexao')
const jwt = require('jsonwebtoken')

const verificaLogin = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ mensagem: 'O token não foi informado' })
  }

  try {
    const token = authorization.replace('Bearer', '').trim()

    const { id } = jwt.verify(token, process.env.PW_JWT)

    const usuarioExiste = await knex('usuarios').where({ id }).first()

    if (!usuarioExiste) {
      return res.status(404).json('Usuario não encontrado')
    }

    const { senha, ...usuario } = usuarioExiste

    req.usuario = usuario

    next()
  } catch (error) {
    return res
      .status(401)
      .json({
        mensagem:
          'Para acessar este recurso um token de autenticação válido deve ser enviado.',
      })
  }
}

module.exports = verificaLogin
