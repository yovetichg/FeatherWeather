'use strict';

describe('Service: coopDoorService', function () {

  // load the service's module
  beforeEach(module('featherWeatherApp'));

  // instantiate service
  var coopDoorService;
  beforeEach(inject(function (_coopDoorService_) {
    coopDoorService = _coopDoorService_;
  }));

  it('should do something', function () {
    expect(!!coopDoorService).toBe(true);
  });

});
