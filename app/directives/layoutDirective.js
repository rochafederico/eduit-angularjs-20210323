angular.module('eduit').directive('layoutEduIt', function(){
    return {
        templateUrl: 'app/directives/layoutEduItDirective.html',
        transclude: true,
        scope: {
            title: "@"
        }
    }
})