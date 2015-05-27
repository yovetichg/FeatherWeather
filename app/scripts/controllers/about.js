'use strict';

/**
 * @ngdoc function
 * @name featherWeatherApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the featherWeatherApp
 */
angular.module('featherWeatherApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
