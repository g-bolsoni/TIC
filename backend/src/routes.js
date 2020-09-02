const express = require('express');
const routes = express.Router();
const OrdemServicoController = require('./controllers/OrdemServico/OrdemServicoController');
const CacambasController = require('./controllers/Cacambas/CacambasController');
const EstoqueController = require('./controllers/Estoque/EstoqueController');
const mongo = require('./database/db')


/*ORDEM DE SERVIÇO */
routes.get('/ordem_servico',OrdemServicoController.index);
routes.post('/ordem_servico',OrdemServicoController.create);
routes.put('/ordem_servico/:_id', OrdemServicoController.put)
routes.delete('/ordem_servico/:_id',OrdemServicoController.delete)

/* CAÇAMBAS */
routes.get('/cacambas',CacambasController.index);
routes.post('/cacambas',CacambasController.create);
routes.put('/cacambas/:_id', CacambasController.put)
routes.delete('/cacambas/:_id',CacambasController.delete)

/* ESTOQUE */
routes.get('/estoque',EstoqueController.index);
routes.post('/estoque',EstoqueController.create);
routes.put('/estoque/:_id',EstoqueController.put);
routes.delete('/estoque/:_id',EstoqueController.delete);


module.exports =routes