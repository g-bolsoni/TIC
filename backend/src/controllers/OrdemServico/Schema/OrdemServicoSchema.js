const mongo = require('mongoose')

const OrdemServico = mongo.Schema({
    cod_os:{type:Number, required:true},
    dt_Locacao:{type:Date , default:Date.now , required:true},
    dt_Remocao:{type:Date, default:Date.now, required:true}, 
    quantidade:{type:Number, required:true},
    cep_Locacao:{type:String,required:true},
    numero_Locacao:{type:Number,required:true},
    valor_Pedidio:{type:Number,required:true}
})

module.exports = mongo.model('OrdemServico' , OrdemServico, 'ordemServico' );