'use strict';

module.exports = {
  
  checkParity : function (value) {
    return new Promise ((resolve, reject) => {
      
      if (value % 2 === 0) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  }

};