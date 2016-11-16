var mysql = require('mysql');

var connectMYSQL = function(){
    //Conexão
    return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'casadocodigo-db'
    });
};

module.exports = function(){
    return connectMYSQL;
}
        