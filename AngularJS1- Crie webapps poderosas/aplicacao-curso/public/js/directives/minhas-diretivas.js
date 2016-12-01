angular.module("minhasDiretivas", []).directive('meuPainel', function(){
    var ddo = {}; // Directive definition object

    ddo.restric = "AE"; // Indica que o ddo pode ser usado como Atribute ou Element

    ddo.scope = {
        titulo: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html'

    return ddo;

});