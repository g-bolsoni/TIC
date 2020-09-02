const OrdemServico =require( './Schema/OrdemServicoSchema')
    /*GET */
    module.exports.index=async (req,res)=>{
        const indexOS = await OrdemServico.find()
        res.json(indexOS);
     }
     /*POST */
     module.exports.create=async (req,res)=>{   
         const {
             cod_os,
             dt_Locacao,
             dt_Remocao, 
             quantidade,
             cep_Locacao,
             numero_Locacao,
             valor_Pedidio
         } = req.body
     
         const createOS = await OrdemServico.create({cod_os,dt_Locacao,
                                              dt_Remocao,
                                              quantidade,
                                              cep_Locacao,
                                              numero_Locacao,
                                              valor_Pedidio});
         res.json({createOS})
     }
 /* DELETE */
module.exports.delete = async (req,res)=>{
    const id = req.params._id
    console.log(id)
    const deleteOS = await OrdemServico.findByIdAndDelete(id)
    res.json(deleteOS)
}

/*PUT*/

module.exports.put = async (req,res)=>{
    const id =  req.params._id;
    console.log(id)
    const putOS = await OrdemServico.findByIdAndUpdate(id,req.body)
    res.json(putOS)
}
