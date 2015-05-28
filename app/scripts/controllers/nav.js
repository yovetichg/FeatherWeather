'use strict';

/**
 * @ngdoc function
 * @name featherWeatherApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the featherWeatherApp
 */
angular.module('featherWeatherApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isActive = function(viewLocation) {
    	return viewLocation === $location.path();
    }
  });
