angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            titulo: '@' // O @ Só copia o q tiver no value da diretiva com esse nome
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
    .directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@', // O @ Só copia o q tiver no value da diretiva com esse nome
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
        
        return ddo;
    })
    .directive('meuBotaoPerigo', function(){
        var ddo = {}

        ddo.restrict = "E";

        ddo.scope = {
            nome: '@', // O @ só copia o q tiver no value da diretiva com esse nome em forma de string.
            acao: '&' // Passa uma expressão como por exemplo uma função.
        };

        ddo.template ='<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

        return ddo;
    });