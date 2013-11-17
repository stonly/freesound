'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {
     delete $http.defaults.headers.common['X-Requested-With'];
     $scope.sounds = [];

     $http({method: 'GET', url: 'http://www.freesound.org/api/sounds/search/', params: {q: 'barking', api_key: 'fca4cde51acf4dd4ab631b8ca79fa2e7'}}).success(function(data, status) {
	console.log(data, status);
        if(data.sounds && data.sounds.length) {
            $scope.sounds = data.sounds;
        }
     }).error(function(data, status) {
     });

  }])
  .controller('MyCtrl2', [function() {

  }]);
