angular
  .module('edu-it-filtros', [])
  .filter('miFiltro', function(){
    return function(valor){
      return valor;
    }
  })
  .constant('urlBaseMultimedia', 'https://www.w3schools.com/')
  .filter('urlMultimedia', function(urlBaseMultimedia){
    return function(valor) {
      return urlBaseMultimedia + valor;
    }
  })
.filter('stringToArray', function(){
  return function(value, caracter) {
    if(caracter){
      return value.split(caracter);
    }
    return value.split(',');
  }
})