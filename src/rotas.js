const express = require('express')
const usuarios = require('./controladores/usuarios')
const login = require('./controladores/login')
const servicos = require('./controladores/serviços')
const verificaLogin = require('./midleware/autorizacao')

const rotas = express()

rotas.post('/cadastro', usuarios.cadastrarUsuarios)
rotas.post('/login', login.login)

rotas.use(verificaLogin)

rotas.get('/servicos', servicos.buscarServiços)
rotas.get('/servicos/:categoria', servicos.buscaPorCategoria)

module.exports = rotas
