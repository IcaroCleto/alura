module.exports = function(app){
    app.get('/',function(request, response){
    response.send("<html><body>Página Inicial</body></html>"); // Renderiza a mensagem.
    // response.render("produtos/lista"); // Renderiza a página. OBS: A pasta view é padrão do express.
});

    app.get("/produtos", function(request,response){
        //Importa a função conexão do arquivo connectionFactory.js
        var connection = app.infra.connectionFactory();  
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        produtosBanco.lista(function(err,result){
            response.render('produtos/lista',{lista:result});
        });

        connection.end();   
    });
    
    // app.get('produtos/remove', function(){
    //     var connection = app.infra.connectionFactory();
    //     var produtosBanco = app.infra.ProdutosBanco;
    //     var produto = produtosBanco.carrega(id, callback);
    //     if(produto){
    //         v.remove(produto,callback);
    //     }
    // });
}

