const yup = require('./configuracoes');


const schemaCadastroUsuario = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required().email(),
    senha: yup.string().required().min(5),
    telefone: yup.string()
})

module.exports = schemaCadastroUsuario;