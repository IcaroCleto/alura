var http = require('http');

var server = http.createServer(function(request,response){// Cria um objeto createserver
    if (request.url == "/"){ // Se a requisição do browser for igual a /
        response.end("<html><body><h1>Página Inicial!</h1></body></html>"); // O sistema responde essa linha
    } else if (request.url == "/produtos"){        
        response.end("<html><body><h1>Listando os Produtos</h1></body></html>");
    } else {
        response.end("<html><body><h1>Página não encontrada!</h1></body></html>");
    };    
});

server.listen(3000,"localhost"); // Liga seu servidor na porta 3000

console.log("Servidor ta rodando!");