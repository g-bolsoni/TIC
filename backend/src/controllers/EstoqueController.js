/*GET */
module.exports.index=function(req,res){
    res.json({message:'Estoque(GET)'})
 }
 /*POST */
 module.exports.create=function(req,res){   
    const {nome_Estoque}=req.body
    
    console.log(req.body)

    res.json({message:"Ola"})

    console.log({nome_Estoque})
}