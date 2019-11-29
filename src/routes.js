const express = require('express');
const FuncionarioController = require('./controllers/funcionarioController');
const entradaSaidaController = require('./controllers/entradaSaidaController');
const FuncionariosPresentes = require('./controllers/presentesController');

const routes = express.Router();

routes.get('/funcionarios', FuncionarioController.index);
routes.post('/funcionarios', FuncionarioController.store);
routes.put('/funcionario', FuncionarioController.put);
routes.post('/funcionario/:funcionarioID/entradaSaida', entradaSaidaController.store );
routes.delete('/funcionarios', FuncionarioController.delete)

routes.get('/funcionarios/presentes', FuncionariosPresentes.index)

module.exports = routes;