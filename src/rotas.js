const express = require('express');
const usuarios = require('./controladores/usuarios');
const login = require('./controladores/login');

const rotas = express();

rotas.post('/cadastro', usuarios.cadastrarUsuarios);
rotas.post('/login', login.login);


module.exports = rotas