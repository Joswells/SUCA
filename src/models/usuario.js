const {Schema, model} = require('mongoose');

const UsuarioSchema= new Schema({
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true
    }
})

module.exports =  model("usuario", UsuarioSchema)
