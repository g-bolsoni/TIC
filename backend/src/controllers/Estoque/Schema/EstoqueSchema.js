const mongo = require('mongoose');

const EstoqueSchema = mongo.Schema({
    nome_Estoque:{type:String , required:true}
});

module.exports = mongo.model('Estoque', EstoqueSchema, 'estoque')