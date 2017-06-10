const when = require('when');

/**
  * @classdesc
  * for now this module is a mock for the code generator
  **/

module.exports = {
  getCode: (language, inCode) => {
    return when.promise((resolve, reject) => {
      console.log("Started reformatting " + language + " code.");
      setTimeout(() => {
        resolve(inCode.toString() + " has been processed by a server.");
      }, 2500);
    });
  }
};
