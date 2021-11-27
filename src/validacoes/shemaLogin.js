const yup = require('./configuracoes');

const schemaLogin = yup.object().shape({
    email: yup.string().required().email(),
    senha: yup.string().required().min(5)
})

module.exports = schemaLogin;