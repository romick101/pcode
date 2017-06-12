const when = require('when');
const chalk = require('chalk');
const antlr4 = require('antlr4/index');
// const JSONLexer = require('./antlr/JSON/JSONLexer');
// const JSONParser = require('./antlr/JSON/JSONParser');
// const JSONListener = require('./antlr/JSON/FormattedJSONListener').FormattedJSONListener;
const JSONextLexer = require('./antlr/JSONext/JSONextLexer');
const JSONextParser = require('./antlr/JSONext/JSONextParser');
const JSONextListener = require('./antlr/JSONext/FormattedJSONextListener').FormattedJSONextListener;
const languages = ["json"];


function reparse (inCode) {
  return when.promise((resolve, reject) => {
    const chars = new antlr4.InputStream(inCode);
    const lexer = new JSONextLexer.JSONextLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JSONextParser.JSONextParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.json();
    const listener = new FormattedJSONextListener("");
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    console.log(chalk.blue("Got code:\n") + listener.out);
    resolve(listener.out);
  });
}

module.exports = {
  getCode: (language, inCode) => {
    return when.promise((resolve, reject) => {
      if (!languages.includes(language.toLowerCase())) reject("Unsupported lang!");
      console.log("Trying to reformat " + language + " code.");
      reparse(inCode)
        .then(outCode => resolve({
          lang: language,
          code: outCode}));
    });
  }
};
