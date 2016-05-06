'use strict';

module.exports = {

  call : function (report, fillingData) {
    report.operations = fillingData;
    return report
  },
  
  bind : function (report) {
    return {
      call : this.call,
      report : report
    }
  }

};