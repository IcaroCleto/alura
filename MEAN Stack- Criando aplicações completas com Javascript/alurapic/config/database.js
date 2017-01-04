module.exports = function(uri) {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri);

    mongoose.connection.on('connected', function() {
        console.log('Conectado ao MongoDB');
    });

    mongoose.connection.on('error', function() {
        console.log('Erro na conexão: ' + error);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Desconectado do MongoDB');
    });

    process.on('SIGINT', function() { // Evento de finalização da aplicação
        mongoose.connection.close(function() {
            console.log('Conexão fechada pelo termino da aplicação');
            process.exit(0); //Indica que foi terminado e não foi um erro.
        });
    });
};