const mongo = require('mongoose');

mongo.connect('mongodb+srv://giovane:gbes0406@tic.05u64.mongodb.net/TIC',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });

mongo.connection.on('connected',()=>{console.log('DEU CERTO')}) //Quando conecta no banco

module.exports = mongo;