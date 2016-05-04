'use strict';

var
  chai = require('chai'),
  expect = chai.expect,
  /**/
  PromiseDummy = require('../examples/promise/PromiseDummy');

describe('Complex Async Process', function () {
  this.timeout(2000);

  it('should run every promise and return true', function () {

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
      PromiseDummy.checkParity(input[0]),
      PromiseDummy.checkParity(input[1]),
      PromiseDummy.checkParity(input[2])
    ])
      .then(values => {
        result = values[0] && values[1] && values[2];
        expect(result).to.equal(expected);
      });

  });
});