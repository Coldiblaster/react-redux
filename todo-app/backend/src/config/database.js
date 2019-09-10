// Configurar o mongoose - Banco não relacional
// Fazer o mapeamento dos objetos do do javascrip que vão para o mongo e abrir a conexação

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')
