'use strict';

/**
 * @ngdoc function
 * @name featherWeatherApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the featherWeatherApp
 */
angular.module('featherWeatherApp')
  .controller('AboutCtrl', function ($scope, coopDoorService) {
    
    $scope.checkDoorStatus = function(){
    	var isDoorOpen = coopDoorService.isDoorOpen();
    	$scope.isDoorOpen = isDoorOpen;
    }
  });
