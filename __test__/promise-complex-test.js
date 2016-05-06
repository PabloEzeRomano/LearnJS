'use strict';

var
  chai = require('chai'),
  expect = chai.expect,
  _ = require('lodash'),
  /**/
  PromiseDummy = require('../examples/promise/PromiseDummy');

describe('Promises Exercise', function () {

  var
    even = _.range(0, 100000, 2),
    odd = _.range(1, 99999, 2);

  it('should return a promise and check the parity (false)', function () {
    return PromiseDummy.checkParity(_.sample(odd))
      .then(value => {
        expect(value).to.equal(false);
      });
  });

  it('should return a promise and check the parity (true)', function () {
    return PromiseDummy.checkParity(_.sample(even))
      .then(value => {
        expect(value).to.equal(true);
      });
  });

  it('should run every promise', function () {

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