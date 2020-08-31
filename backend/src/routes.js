const express = require('express');
const routes = express.Router();
//const OrdemServicoController = require('./controllers/OrdemServicoController');
const mongo = require('./server')



routes.get('/ordem_servico',(req,res)=>{
    res.json({message:'Index ok'})
});


routes.post('/ordem_servico',(req,res)=>{   
    const {
        dt_Locacao,
        dt_Remocao, 
        quantidade,
        cep_Locacao,
        numero_Locacao,
        valor_Pedidio
    } = req.body

    console.log(req.body)
    
    res.json({message:
        `POST realizado com sucesso
        ${dt_Locacao},
        ${dt_Remocao},
        ${quantidade},
        ${cep_Locacao},
        ${numero_Locacao}
        ${valor_Pedidio} `
    })
   
}
);


module.exports =routes