module.exports = function(app){
    var listaProdutos = function(request, response){
        //Importa a função conexão do arquivo connectionFactory.js
        var connection = app.infra.connectionFactory();  
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(err,result){
            result.format({
                html: function(){
                    response.render('produtos/lista',{lista:result});
                },
                json: function(){
                    response.json(resultados);
                }
            });
        });
        connection.end(); 
    }
    app.get('/',function(request, response){
    response.send("<html><body>Página Inicial</body></html>"); // Renderiza a mensagem.
    // response.render("produtos/lista"); // Renderiza a página. OBS: A pasta view é padrão do express.
});

    app.get("/produtos", listaProdutos);

    app.get("/produtos/form", function(request, response){
        response.render('produtos/form', {errosValidacao:{},produto:{}});
    });

    app.post("/produtos", function(request, response){

        var produto = request.body;
        
        req.assert('titulo', 'Titutlo é obrigatório').notEmpty();
        req.assert('preço', 'Formato inválido').isFloat();

        var erros = req.validationErrors();
        if(erros){
            result.format({
                html: function(){
                    response.status(400).render('produtos/form',{errosValidacao:erros, produto:produto});
                },
                json: function(){
                    response.status(400).json(erros);
                }
            });            
            return;
        }

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

