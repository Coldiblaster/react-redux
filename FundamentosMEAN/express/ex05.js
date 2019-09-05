//            --- EXPRESS ROUTER ---

const express = require('express') //Importa a biblioteca do Express
const server = express() // retorna uma instancia do express e armazena no server
const router = require('./ex05_routes')

server.use('/api', router) // Utiliza as router --- router é uma função middleware

server.listen(3000, () => console.log('Executando....'))