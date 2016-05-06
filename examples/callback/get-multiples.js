'use strict';

module.exports = function (numbers, multiple, step, operations, steps, result) {
  
  var numberList = [];

  operations(numbers.length);
  
  numbers.forEach((number, index) => {
    
    if (number % multiple === 0) {
      numberList.push(number)
    }
    var opNum = index+1;

    if (opNum % step === 0){
      steps(`${opNum} calculated`);
    }
  });
    
  result(numberList);
  
};