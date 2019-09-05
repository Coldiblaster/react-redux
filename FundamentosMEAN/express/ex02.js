//            --- CADEIA DE MIDDLEWARE 02 ---

const express = require('express') //Importa a biblioteca do Express
const server = express() // retorna uma instancia do express e armazena no server

//CADEIA DE MIDDLEWARE

server.get('/', function(req, res, next) {
    console.log('Inicio...')
    next() // Manda para a proxima MIDDLEWARE - Nesse ponto, o next passa para a proxima CADEIA DE MIDD... 
    //Quando terminar a execução do seguinte MIDDLEWARE ele volta para termina essa execução
    console.log('Fim...') // Retorna depois para finalizar
})

server.get('/', function(req, res){
    console.log('Respota...')
    res.send('<h1>Olá Express!</h1>')
})


server.listen(3000, () => console.log('Executando....'))