const {Schema, model} = require('mongoose');

const FuncionarioSchema= new Schema({
    nome: {
        type: String,
        required: true,
    },
    funcao: {
        type: String,
        required: true
    },
    setor: {
        type: String,
        required: true
    },
    presente: {
        type: Boolean
    },
    entrada: {
        type: Date,
    },
    acessos: {
        type: Array
    }
})

module.exports =  model("funcionario", FuncionarioSchema)