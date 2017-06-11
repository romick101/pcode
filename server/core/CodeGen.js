const when = require('when');
const languages = ["lisp", "bash", "java"];

/**
  * @classdesc
  * for now this module is a mock for the code generator
  **/

module.exports = {
  getCode: (language, inCode) => {
    return when.promise((resolve, reject) => {
      if (!languages.includes(language.toLowerCase())) reject("Unsupported lang!");
      console.log("Trying to reformat " + language + " code.");
      setTimeout(() => {
        if (inCode.includes("=>")) reject("Parse error.");
        resolve({
          lang: language,
          code: inCode.toString() + " has been processed by a server."});
      }, 2500);
    });
  }
};
