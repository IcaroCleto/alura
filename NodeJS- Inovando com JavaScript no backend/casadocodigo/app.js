var app = require('./config/express')(); // Carrega o modulo express criado por mim.

app.listen(3000,function(){
    console.log("Servidor rodando");
});