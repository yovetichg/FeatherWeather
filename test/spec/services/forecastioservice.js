'use strict';

describe('Service: forecastIOService', function () {

  // load the service's module
  beforeEach(module('featherWeatherApp'));

  // instantiate service
  var forecastIOService;
  beforeEach(inject(function (_forecastIOService_) {
    forecastIOService = _forecastIOService_;
  }));

  it('should do something', function () {
    expect(!!forecastIOService).toBe(true);
  });

});
