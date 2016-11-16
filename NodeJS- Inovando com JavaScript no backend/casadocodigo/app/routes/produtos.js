module.exports = function(app){
    var listaProdutos = function(request, response){
        //Importa a função conexão do arquivo connectionFactory.js
        var connection = app.infra.connectionFactory();  
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(err,result){
            response.render('produtos/lista',{lista:result});
        });
        connection.end(); 
    }
    app.get('/',function(request, response){
    response.send("<html><body>Página Inicial</body></html>"); // Renderiza a mensagem.
    // response.render("produtos/lista"); // Renderiza a página. OBS: A pasta view é padrão do express.
});

    app.get("/produtos", listaProdutos);

    app.get("/produtos/form", function(request, response){
        response.render('produtos/form');
    });

    app.post("/produtos", function(request, response){

        var produto = request.body;

        var connection = app.infra.connectionFactory();  
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(error, result){
            produtosDAO.lista(function(err,result){
                response.redirect('produtos/lista',{lista:result});
            });
        });
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

