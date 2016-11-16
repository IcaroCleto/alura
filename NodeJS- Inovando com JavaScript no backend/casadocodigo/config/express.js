var express = require('express'); // Carrega o modulo do express
var load = require('express-load') //  

module.exports = function (){   

    var app = express();

    app.set('view engine','ejs'); // Configura o engine de layout
    app.set('views','./app/views'); //Configura onde o express busca as views. OBS: A posição é baseada da onde o servidor sobe ou seja App.js.

    load('routes', {cwd: 'app'}) // Carrega todos os arquivos dentro de rotas.
        .then('infra') // Então carrega todos os arquivos dentro de infra.
        .into(app); // Tudo que for carregado automaticante fica dentro da app (express).

    return app; // Retorna o app configurado.
}

// Outra maneira

// var app = require('express')();
// app.set('view engine','ejs');

// module.exports = function(){
//     return app;
// }