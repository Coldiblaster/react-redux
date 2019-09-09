// Aqui ira mapear o objeto para o documento do MONGO

const restful = require('node-restful') // restful ele cria uma casca em cima do mongoose dando uma api rash facil de utilizar
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, require:true, default: false },
    createdAt: { type:Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)