const express = require('express');
const routes = express.Router();
const OrdemServicoController = require('./controllers/OrdemServicoController');
const CacambasController = require('./controllers/CacambasController');
const EstoqueController = require('./controllers/EstoqueController');
const mongo = require('./database/db')


/*ORDEM DE SERVIÇO */
routes.get('/ordem_servico',OrdemServicoController.index);
routes.post('/ordem_servico',OrdemServicoController.create);


/* CAÇAMBAS */
routes.get('/cacambas',CacambasController.index);
routes.post('/cacambas',CacambasController.create);
routes.put('/cacambas/:_id', CacambasController.put)
routes.delete('/cacambas/:_id',CacambasController.delete)

/* ESTOQUE */
routes.get('/estoque',EstoqueController.index);
routes.post('/estoque',EstoqueController.create);

module.exports =routes