function ProdutosDAO(connection){
    this._connection = connection;    //Usa-se o _ para indicar que esse atributo é privado.
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from produtos', callback);
}

module.exports = function(){
    return ProdutosDAO;
}