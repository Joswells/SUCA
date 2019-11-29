const Funcionario = require('../models/funcionario')

module.exports = {
    index(req, res) {
        Funcionario.find()
            .then(data => {
                return res.json({ data })
            })
            .catch(err => console.log(err));
    },

    getOne(req, res) {
        if(req.body.id)
        Funcionario.findById(req.body.id)
        .then( resp => res.json(resp) )

    },
    async store(req, res) {
        const { nome, funcao, setor } = req.body
        const funcionario = await Funcionario.create({
            nome,
            presente: false,
            funcao: funcao ? funcao : "Não Fornecida",
            setor: setor ? setor : "Não Fornecida",
            entrada: null,
            acessos: []
        })

        return res.json({ funcionario });
    },

    put(req, res) {
        if (req.body.id) {
            const { id, nome, funcao, setor } = req.body;
            const funcionarioSelecionado = Funcionario.findById(id);

            if (!funcionarioSelecionado) {
                return res.json({ code: 404, message: "Funcionario não encontrado" })
            }

            Funcionario.findByIdAndUpdate({ _id: id }, { nome, funcao, setor })
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
