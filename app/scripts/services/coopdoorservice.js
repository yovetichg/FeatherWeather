'use strict';

/**
 * @ngdoc service
 * @name featherWeatherApp.coopDoorService
 * @description
 * # coopDoorService
 * Factory in the featherWeatherApp.
 */
angular.module('featherWeatherApp')
  .factory('coopDoorService', function () {
    // Service logic
    // ...

    var isDoorOpen = true;

    // Public API here
    return {
      isDoorOpen: function () {
        //TODO: this is dumb, it's just so the UI is more interesting
        isDoorOpen = !isDoorOpen;
        return isDoorOpen;
      }
    };
  });
