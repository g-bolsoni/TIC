module.exports = class OrdemServicoController{

    async index(req,res){
        res.json({message:'Index ok'})
    }
    async create(req,res){

        const {
            dt_Locacao ,
            dt_Remocao, 
            quantidade,
            cep_Locacao,
            numero_Locacao,
            valor_Pedidio
        } = req.body
    
       
        console.log(req.body)
       
            await res.json({message:'POST realizado com sucesso '})
       
    }
}
