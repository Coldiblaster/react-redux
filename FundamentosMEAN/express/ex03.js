//            --- MÉTODO USE ---
// Outra forma de mapear as URL e criar cadeias de renponsabilidades do express

const express = require('express') //Importa a biblioteca do Express
const server = express() // retorna uma instancia do express e armazena no server

//CADEIA DE MIDDLEWARE

server.use('/api', function(req, res, next) {
    console.log('Inicio...')
    next() // Manda para a proxima MIDDLEWARE - Nesse ponto, o next passa para a proxima CADEIA DE MIDD... 
    //Quando terminar a execução do seguinte MIDDLEWARE ele volta para termina essa execução
    console.log('Fim...') // Retorna depois para finalizar
})

server.use('/api', function(req, res){
    console.log('Respota...')
    res.send('<h1>API!</h1>')
})

// *** QUANDO USA O .GET, DIZ EXATAMENTO ONDE ESTÁ A URL
// *** QUANDO USA O .USE, ELE RECEBE O PARAMETRO COMO INICIO DA REQUISIÇÃO, QUER SERIA O /API .. ENTÃO SE COMEÇA COM /API VAI ENTRAR DE BOA /API/TESTE VAI PASSAR
// *** METODO .USE É BEM UTILIZADO 

server.listen(3000, () => console.log('Executando....'))