angular
  .module('eduit')
  .controller('holaController', function($scope) {
    $scope.nombre = "Juan";
    $scope.cambiarNombre = function() {
      $scope.nombre = "Pepe";
    }
  });