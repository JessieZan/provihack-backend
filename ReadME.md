# Back-End

### Tecnologias Utilizadas

- Express
- Nodemon
- Knex
- Bcrypt
- Cors
- JWToken
- node-postegres (pg)
- Yup 

## End-Points

## POST - Cadastro de Usuário

### Dados Enviados
- Nome
- Senha
- Email (único)
- telefone (opcional)

### Dados Recebidos
- Sucesso
- Fracasso em caso de campos obrigatorios em branco ou e-mail já cadastrado


#### Objetivos gerais
- verificar se o email ja existe
- criptografar a senha
- cadastrar usuario no banco de dados
- retornar sucesso ou erro

---

### POST - Login

#### Dados enviados
- E-mail
- Senha

#### Dados recebidos
- Sucesso
- Fracasso em caso de  campos em branco, email inexistente, senha incorreta (mesma msg de erro)
- Token

#### Objetivos gerais
- validar username e senha 
- buscar usuario no banco de dados
- verificar se a senha informada está correta
- gerar token de autenticação
- retornar os dados do usuario e o token


---

### GET - Busca por área de atuação
#### Dados enviados

- Segmento de atuação para busca (Preparo para Entrevista, Apoio Psicologico, Cursos, Assessoria Juridica)


#### Dados recebidos
- Dados no banco de correspondam a pesquisa feita (Tabela serviços)
- Fracasso em caso de nao existir nada que corresponda a pesquisa



---

## RESUMO Endpoints para integração

---

### Cadastro Usuario

### Endpoint - http://localhost:3000/users

### POST
#### Dados Enviados

 {
	"name": "Jéssica Vargas Zanchetta",
	"email": "jessica.zanchettaa@hotmail.com",
	"password": "12345678"
    "phone": "49999998888"
}

#### Dados Recebidos 

- Sucesso ou error

---

### Login Usuario

### Endpoint - http://localhost:3000/login

### POST
#### Dados Enviados

{
	"email": "jessica.zanchettaa@hotmail.com",
	"password": "12345678"
}

#### Dados Recebidos 


{
  "user": {
    "id": 3,
    "name": "Jéssica Vargas Zanchetta",
    "email": "jessica.zanchettaa@hotmail.com",
    "cpf": null,
    "phone": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjM3ODc1MzI0LCJleHAiOjE2Mzc5MDQxMjR9.G0a6J5R9mpZegreZSPffszaI86miA0pVZDmzMx2g-tI"
}


---


### Busca de serviços

### Endpoint - http://localhost:3000/services

### POST

#### Dados Enviados

{
 "busca": "Apoio Psicologico"
}

#### Dados Recebidos 

{
	"name": "Jéssica Vargas Zanchetta",
	"email": "jessica.zanchettaa@hotmail.com",
	"resumo": "Oferecemos ajuda psicológica para pessoas em situação de dificuldade.",
	"phone": "49999996655",
    "categoria": "Apoio Psicologico"
}


- Fracasso em caso de nao existir nenhum item corresppndente a pesquisa no banco