const when = require('when');
const chalk = require('chalk');
const antlr4 = require('antlr4/index');
const JSONLexer = require('./antlr/JSONLexer');
const JSONParser = require('./antlr/JSONParser');
const JSONListener = require('./antlr/FormattedJSONListener').FormattedJSONListener;
const languages = ["json"];


function reparse (inCode) {
  return when.promise((resolve, reject) => {
    const chars = new antlr4.InputStream(inCode);
    const lexer = new JSONLexer.JSONLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JSONParser.JSONParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.json();
    const listener = new FormattedJSONListener("");
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
