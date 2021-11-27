const express = require('express');
const usuarios = require('./controladores/usuarios');

const rotas = express();

rotas.post('/cadastro', usuarios.cadastrarUsuarios);
rotas.post('login');


module.exports = rotas