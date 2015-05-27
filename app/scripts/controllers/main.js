'use strict';

/**
 * @ngdoc function
 * @name featherWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the featherWeatherApp
 */
angular.module('featherWeatherApp')
  .controller('MainCtrl', function ($scope, forecastIOService) {
    $scope.getForecast = function(){
    	var promise = forecastIOService.getCurrentForecast();
    	promise.then(
    		function(payload){
    			console.dir(payload);
    			$scope.todaySunrise = payload.daily.data[0].sunriseTime * 1000;
    			$scope.todaySunset = payload.daily.data[0].sunsetTime * 1000;
    		},
    		function(errorPayload){
    			console.log('error');
    		});
    }
  });
