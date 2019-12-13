const Usuario = require('../models/Usuario')

module.exports = {
    validacao(req, res) {
        if (!req.body) {
            return res.json({ status:404, message: "Usuário não existe" })
        }
        const { email, senha } = req.body;

        if(email == "admin" && senha == "root")
            return res.json({ status: 200, message:"ok" })
        else
            return res.json({ status:404, message: "Usuário não existe" })
    }
}
