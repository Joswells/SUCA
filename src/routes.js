const express = require('express');
const FuncionarioController = require('./controllers/funcionarioController');
const entradaSaidaController = require('./controllers/entradaSaidaController');
const FuncionariosPresentes = require('./controllers/presentesController');
const LoginController = require('./controllers/loginController');

const routes = express.Router();

routes.post('/login', LoginController.validacao)

routes.get('/funcionarios', FuncionarioController.index);
routes.post('/funcionario/info', FuncionarioController.getOne)
routes.get('/funcionario/:funcionarioID/entradaSaida', entradaSaidaController.store );
routes.delete('/funcionario', FuncionarioController.delete)

routes.post('/funcionario', FuncionarioController.store);
routes.put('/funcionario', FuncionarioController.put);

routes.get('/funcionarios/presentes', FuncionariosPresentes.index)

module.exports = routes;