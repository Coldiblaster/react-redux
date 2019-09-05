//Configuração relativo ao express e start o servidor 

const port = 3003

const bodyParser = require('body-parser') //Justamente o cara que vai fazer o parser com o corpo da requisição
const express = require('express') //Servidor web que roda em cima do node
const server = express()

server.use(bodyParser.urlencoded({ extended:true })) //Sempre que chegar requisição: urlencoded quem vai fazer requisição é o bodyParser
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})