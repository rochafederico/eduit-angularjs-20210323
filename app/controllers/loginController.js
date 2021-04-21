angular.module('eduit').controller('loginController', ["$scope", "$location", function($scope, $location){
    $scope.usuario = 'user'
    $scope.clave = '123'
    $scope.enviar = function() {
        // llamar algun servicio userService.login
        $location.url("/empleados");
    }
}])