'use strict';

var
  chai = require('chai'),
  expect = chai.expect,
  _ = require('lodash'),
  startCallback = require('../examples/callback/start-callback'),
  stepCallback = require('../examples/callback/step-callback'),
  endCallback = require('../examples/callback/end-callback'),
  getMultiples = require('../examples/callback/get-multiples');


describe('Callback Exercise', function () {

  it('should return self after invocation and fill in the report', function () {

    var
      report = {
        operations : 0,
        steps : [],
        result : []
      },
      start = startCallback.call(report, 10),
      steps = stepCallback.call(report, '5 calculated'),
      end = endCallback.call(report, [1,2,3]);

    expect(start).to.equal(report);
    expect(steps).to.equal(report);
    expect(end).to.equal(report);
    expect(report.operations).to.equal(10);
    expect(report.steps[0]).to.equal('5 calculated');
    expect(report.result).to.eql([1,2,3]);
  });

  it('should calculate if numbers are multiple and fill in the report', function () {
    var
      report = {
        operations : 0,
        steps : [],
        result : []
      },
      numbers = [10, 45, 63, 120, 365, 9999],
      multiple = 3,
      step = 2,
      expectedReports,
      expectedResults;

    getMultiples(numbers, multiple, step, startCallback.bind(report), stepCallback.bind(report), endCallback.bind(report));

    expectedReports = [
      '2 calculated',
      '4 calculated',
      '6 calculated'
    ];

    expectedResults = [
      45, 63, 120, 9999
    ];

    expect(report.operations).to.eql(6);
    expect(report.steps).to.eql(expectedReports);
    expect(report.result).to.eql(expectedResults);

  });

});