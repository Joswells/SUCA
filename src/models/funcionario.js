const {Schema, model} = require('mongoose');

const FuncionarioSchema= new Schema({
    nome: {
        type: String,
        required: true,
    },
    funcao: {
        type: String
    },
    setor: {
        type: String
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
