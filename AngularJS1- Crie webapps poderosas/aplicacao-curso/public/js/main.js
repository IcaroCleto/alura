<<<<<<< HEAD
angular.module("alurapic", ['minhasDiretivas','ngAnimate','ngRoute']).config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController',
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
    });

    $routeProvider.otherwise({
        redirectTo: '/fotos'
    });
});
=======
// public/js/main.js

angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        // adicionando a propriedade controller que faltava. 

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.otherwise({redirectTo: '/fotos'});

    });
>>>>>>> 131a8d969bf185b01ef58b32d92baa999366fcd8
