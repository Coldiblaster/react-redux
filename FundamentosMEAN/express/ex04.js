//            --- MÉTODO ROUTE --- 

const express = require('express') //Importa a biblioteca do Express
const server = express() // retorna uma instancia do express e armazena no server

//CADEIA DE MIDDLEWARE

server.route('/clientes') //Método route pode chamar varias chamadas de .get ou .use
    .get((req, res) => res.send('Lista de Clientes'))
    .post((req, resp) => res.send('Novo Cliente'))
    .put((req, res) => res.send('Altera Cliente'))
    .delete((req, res) => res.send('Remove Cliente'))

server.listen(3000, () => console.log('Executando....'))