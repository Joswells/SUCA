const Usuario = require('../models/Usuario')

module.exports = {
    validacao(req, res) {
        if(req.login == "admin" && req.senha == "root") {
            return res.json({ code: 200, message: "Usuario existente" })
        }
    }
}
