angular.module('alurapic').controller('FotosController', function ($scope, $http) {

    $scope.fotos = [];

    /* FAZ O MESMO QUE O CÓDIGO DE BAIXO, MAS DE FORMA MAIS SIMPLES*/
    $http.get('v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(erro){
        console.log(erro);
    });


    /* CONCEITO DE PROMISE */
    // var promise = $http.get('v1/fotos');
    // promise.then(function(retorno){
    //     $scope.fotos = retorno.data;
    // }).catch(function(error){
    //     console.log(error);
    // });

});