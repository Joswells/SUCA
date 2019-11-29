const Funcionario = require('../models/funcionario')

module.exports = {
    index(req, res) {
        Funcionario.find()
            .then(data => {
                return res.json({ data })
            })
            .catch(err => console.log(err));
    },
    async store(req, res) {
        const { nome, funcao, setor } = req.body
        const funcionario = await Funcionario.create({
            nome,
            presente: false,
            funcao: funcao ? funcao : null,
            setor: setor ? setor : null,
            entrada: null,
            acessos: []
        })

        return res.json({ funcionario });
    },

    async put(req, res) {
        if (req.body._id) {
            const { id, nome, funcao, setor } = req.body;
            const funcionarioSelecionado = Funcionario.findById(id);
            
            if (!funcionarioSelecionado) {
                return res.json({ code: 404, message: "Funcionario não encontrado" })
            }
            await Funcionario.update({ _id: id }, { nome, funcao, setor })
                .then(resp => {
                    return res.json({ resp, code: 200 })
                })
                .catch(err => console.log(err))
        }
    },

    delete(req, res) {
        if (req.params._id) {
            Funcionario.remove({ _id: req.params._id })
                .then(() => { return res.json({ code: 200 }) })
                .catch(err => console.log(err))
        }
    }


}
