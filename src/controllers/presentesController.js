const Funcionario = require('../models/funcionario')

module.exports = {
    index(req, res) {
        Funcionario.find({ presente: true })
            .then(data => {
                let presentes = []
                data.map( func => presentes.push({ id: func.id, nome: func.nome }))
                
                return res.json({ presentes })
            })
            .catch(err => console.log(err));
    }
}
