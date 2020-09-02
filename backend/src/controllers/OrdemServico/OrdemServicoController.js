
    /*GET */
    module.exports.index=function(req,res){
        res.json({message:'OS (GET)'})
     }
     /*POST */
     module.exports.create=function(req,res){   
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
             `POST realizado com sucesso OS
             ${dt_Locacao},
             ${dt_Remocao},
             ${quantidade},
             ${cep_Locacao},
             ${numero_Locacao}
             ${valor_Pedidio} `
         })
     }
 