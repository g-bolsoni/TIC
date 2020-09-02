const EstoqueSchema = require("./Schema/EstoqueSchema")

/*GET */
module.exports.index= async (req,res)=>{
    const nome = await EstoqueSchema.find()
    res.json(nome)
 }
 /*POST */
 module.exports.create= async (req,res)=>{   
    const {nome_Estoque}=req.body
    console.log(nome_Estoque)

    const nome = await EstoqueSchema.create({nome_Estoque})
    console.log(nome)

    res.json({nome})
}

/* DELETE */
module.exports.delete = async (req,res)=>{
    const id = req.params._id
    const estoque = await EstoqueSchema.findByIdAndDelete(id)
    res.json(estoque)
}
/*PUT*/

module.exports.put = async (req,res)=>{
    const id =  req.params._id;
    const estoque = await EstoqueSchema.findByIdAndUpdate(id,req.body)
    res.json(estoque)
}