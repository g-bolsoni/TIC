const CacambaSchema = require("./Schema/CacambaSchema")

 /*GET */
module.exports.index= async (req,res)=>{
    const cacamba = await CacambaSchema.find();
    
    res.json(cacamba)
 }
 /*POST */
 module.exports.create= async (req,res)=>{   
    const {
        cod_cacamba ,
        valor,
        residuo,
        tamanho
    }=req.body
    
        const cacamba = await CacambaSchema.create({cod_cacamba,valor,residuo,tamanho});
        return res.json({cacamba});
}

/*PUT */
module.exports.put = async (req,res)=>{
    const id = req.params._id
    if(req.body == ""){
       return res.json({mensagem:'informe os campos '})
    }
    const up = await CacambaSchema.findByIdAndUpdate(id,req.body);
    return res.json(up);
}
    


/* DELETE */
module.exports.delete = async (req,res)=>{
    const id = req.params._id
    const cacamba = await CacambaSchema.findByIdAndDelete(id)
    res.json(cacamba)
 }