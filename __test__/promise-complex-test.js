'use strict';

var
  chai = require('chai'),
  expect = chai.expect,
  /**/
  Process = require('../examples/promise/Process'),
  AsyncProcess = require('../examples/promise/AsyncProcess');

describe('Complex Async Process', function () {
  this.timeout(2000);

  it('should run every async process and succeed', function () {

    var
      result = null,
      input = [1,2,3],
      expected = true;

    input.forEach(i => {
      if (i % 2 === 0) {
        expected = false;
      }
    });

    return Promise.all([
      AsyncProcess.doSomeAsyncStuff(input[0]),
      AsyncProcess.doSomeAsyncStuff(input[1]),
      AsyncProcess.doSomeAsyncStuff(input[2])
    ])
      .then(values => {
        result = values[0] && values[1] && values[2];
        expect(result).to.equal(expected);
      });

  });
});