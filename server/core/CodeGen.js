const when = require('when');

/**
  * @classdesc
  * for now this module is a mock for the code generator
  **/

class CodeGenerator {
  getCode (inCode) {
    return when.promise((resolve, reject) => {
      setTimeout(() => {
        resolve(inCode.toString() + " is processed by a server.");
      }, 2500);
    });
  }
}

module.exports = CodeGenerator;
