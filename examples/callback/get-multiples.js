'use strict';

module.exports = (numbers, multiple, step, operations, steps, result) => {
  
  var opNum = 0,
    numberList = [];
  
  numbers.forEach((number) => {
    opNum++;
    if (number % multiple === 0) {
      numberList.push(number)
    }
    if (opNum % step === 0){
      steps.call(steps.report, `${opNum} calculated`);
    }
  });
  
  operations.call(operations.report, opNum);
  result.call(result.report, numberList);
  
};