angular.module('eduit').directive('inputEduIt', function(){
    return {
        templateUrl: 'app/directives/inputEdutiDirective.html',
        scope: {
            label: "@",
            type: "@",
            ngModel: "="
        }
    }
})