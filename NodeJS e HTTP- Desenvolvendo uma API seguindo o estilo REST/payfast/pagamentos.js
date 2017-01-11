module.exports = function(app) {
    app.get('/pagamentos', function(req, res) {
        console.log('Recebida requisição de teste na porta 3000');
        res.send('OK');
    });

    app.post('/pagamentos/pagamento', function(req, res) {
        var pagamento = req.body;
        console.log('processando uma requisicao de um novo pagamento');

        pagamento.status = 'CRIADO';
        pagamento.data = new Date;

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = app.persistencia.PagamentoDao(connection);

        pagamentoDao.salva(pagamento, function(erro, resultado) {
            if (erro) {
                res.send(erro);
            }
            console.log('pagamento criado');
            res.json(pagamento);
        });

        res.send('OK');
    });
}