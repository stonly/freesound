'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$http', function($http) {
//fca4cde51acf4dd4ab631b8ca79fa2e7
//http://www.freesound.org/api/sounds/search?q=barking&api_key=12d6dc5486554e278e370cdc49935908
delete $http.defaults.headers.common['X-Requested-With'];
     $http({method: 'GET', url: 'http://www.freesound.org/api/sounds/search', params: {q: 'barking', api_key: 'fca4cde51acf4dd4ab631b8ca79fa2e7', headers: {'Access-Control-Allow-Origin': '*'}}}, function(data, status) {
	console.log(data, status);
     });
  }])
  .controller('MyCtrl2', [function() {

  }]);
