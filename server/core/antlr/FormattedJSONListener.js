const antlr4 = require ('antlr4/index');
const chalk = require ('chalk');
const JSONLexer = require ('./JSONLexer');
const JSONParser = require ('./JSONParser');
const JSONListener = require ('./JSONListener').JSONListener;

FormattedJSONListener = function (out) {
  this.out = out;
  JSONListener.call(this);
  return this;
}

FormattedJSONListener.prototype = Object.create(JSONListener.prototype);
FormattedJSONListener.prototype.constructor = FormattedJSONListener;

FormattedJSONListener.prototype.enterJson = function(ctx) {
  console.log(chalk.green("enterJson: ") + ctx.toString());
}

// Exit a parse tree produced by JSONParser#json.
JSONListener.prototype.exitJson = function(ctx) {
  console.log(chalk.red("exitJson: ") + ctx.toString());
};


// Enter a parse tree produced by JSONParser#obj.
JSONListener.prototype.enterObj = function(ctx) {
  console.log(chalk.green("enterObj: ") + ctx.toString());
  this.out += "{";
};

// Exit a parse tree produced by JSONParser#obj.
JSONListener.prototype.exitObj = function(ctx) {
  console.log(chalk.red("exitObj: ") + ctx.toString());
  this.out += "}";
};


// Enter a parse tree produced by JSONParser#pair.
JSONListener.prototype.enterPair = function(ctx) {
  console.log(chalk.green("enterPair: ") + ctx.toString());
  this.out += ctx.STRING().getText();
};

// Exit a parse tree produced by JSONParser#pair.
JSONListener.prototype.exitPair = function(ctx) {
  console.log(chalk.red("exitPair: ") + ctx.toString());
};

// Enter a parse tree produced by JSONParser#array.
JSONListener.prototype.enterArray = function(ctx) {
  console.log(chalk.green("enterArray: ") + ctx.toString());
  this.out += "[";
};

// Exit a parse tree produced by JSONParser#array.
JSONListener.prototype.exitArray = function(ctx) {
  debugger;
  console.log(chalk.red("exitArray: ") + ctx.toString());
  this.out += "]";
};


// Enter a parse tree produced by JSONParser#value.
JSONListener.prototype.enterValue = function(ctx) {
  console.log(chalk.green("enterValue: ") + ctx.toString());
};

// Exit a parse tree produced by JSONParser#value.
JSONListener.prototype.exitValue = function(ctx) {
  console.log(chalk.red("exitValue: ") + ctx.toString());
  this.out += getValueText(ctx);
};

function getValueText(ctx){
  if (ctx.STRING() !== null) return ctx.STRING().getText();
  if (ctx.NUMBER() !== null) return ctx.NUMBER().getText();
  if (ctx.obj() !== null) return ctx.obj().getText();
  if (ctx.array() !== null) return ctx.array().getText();
  if (ctx.getText !== null) return ctx.getText();
  return null;
}

exports.JSONListener = JSONListener;
