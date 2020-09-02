const mongo = require('mongoose');

const CacambaSchema = mongo.Schema({
    cod_cacamba:{type:Number, required:true},
    valor:{type:Number, required:true},
    residuo:{type:String, required:true},
    tamanho:{type:String, required:true},
});

module.exports = mongo.model('Cacamba', CacambaSchema, 'cacamba')