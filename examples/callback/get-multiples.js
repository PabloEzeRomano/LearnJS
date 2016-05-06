'use strict';

module.exports = function (numbers, multiple, step, operations, steps, result) {
  
  var opNum = 0,
    numberList = [];
  
  numbers.forEach((number) => {
    opNum++;
    if (number % multiple === 0) {
      numberList.push(number)
    }
    if (opNum % step === 0){
      steps(`${opNum} calculated`);
    }
  });
  
  operations(opNum);
  result(numberList);
  
};