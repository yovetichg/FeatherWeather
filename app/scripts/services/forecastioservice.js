'use strict';

/**
 * @ngdoc service
 * @name featherWeatherApp.forecastIOService
 * @description
 * # forecastIOService
 * Factory in the featherWeatherApp.
 */
angular.module('featherWeatherApp')
  .factory('forecastIOService', function ($http, $q) {
    // Service logic
    // ...

	var results;

    // Public API here
    return {
		getCurrentForecast: function () {
      		var deferred = $q.defer();
			$http.jsonp('https://api.forecast.io/forecast/8b3d63341ada038c6a0e4f752e7b96f2/40.4356629,-80.024674?callback=JSON_CALLBACK').
				success(function(data, status, headers, config){
					deferred.resolve(data);
				}).
				error(function(data, status, headers, config){
					deferred.reject(status);
				});
			return deferred.promise;
		}
	}
  });
