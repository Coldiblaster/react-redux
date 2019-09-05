//            --- CADEIA DE MIDDLEWARE 01 ---

const express = require('express') //Importa a biblioteca do Express
const server = express() // retorna uma instancia do express e armazena no server

//Mapeando URL
// 3 funções Middleware
server.get('/', function(req, res){ //Raiz da URL
    res.send('<h1>Index!</h1>')
})

server.all('/teste', function(req, res) { 
    res.send('<h1>Teste!</h1>')
})

server.get(/api/, function(req, res){ // Quando está assim: /api/ significa que se tiver essas letras na url em qualquer lugar, vai entrar
    //Exemplo: http://localhost:3000/minhaapi Vai entrar pq tem api no meio
    res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('Executando....'))