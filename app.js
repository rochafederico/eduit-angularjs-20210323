angular.module('eduit', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider.when('/login', {
        controller: 'loginController',
        templateUrl: 'app/templates/login.html'
    }).when('/empleados', {
        controller: 'empleadosController',
        templateUrl: 'app/templates/empleados.html'
    }).when('/empleados/nuevo', {
        controller: 'empleadosNuevoController',
        templateUrl: 'app/templates/empleadosNuevo.html'
    })
    .otherwise('/login')
});