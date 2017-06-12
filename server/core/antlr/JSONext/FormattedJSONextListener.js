const antlr4 = require ('antlr4/index');
const chalk = require ('chalk');
const JSONextLexer = require ('./JSONextLexer');
const JSONextParser = require ('./JSONextParser');
const JSONextListener = require ('./JSONextListener').JSONextListener;

FormattedJSONextListener = function (out) {
  this.out = out;
  JSONextListener.call(this);
  return this;
}

FormattedJSONextListener.prototype = Object.create(JSONextListener.prototype);
FormattedJSONextListener.prototype.constructor = FormattedJSONextListener;

FormattedJSONextListener.prototype.enterJson = function(ctx) {
}

// Exit a parse tree produced by JSONParser#json.
FormattedJSONextListener.prototype.exitJson = function(ctx) {
};


// Enter a parse tree produced by JSONParser#obj.
FormattedJSONextListener.prototype.enterObj = function(ctx) {
  this.out += "{\n";
};

// Exit a parse tree produced by JSONParser#obj.
FormattedJSONextListener.prototype.exitObj = function(ctx) {
  this.out += "\n}\n";
};


// Enter a parse tree produced by JSONParser#pair.
FormattedJSONextListener.prototype.enterPair = function(ctx) {
  this.out += "  ";
  this.out += ctx.STRING().getText();
  this.out += ": ";
};

// Exit a parse tree produced by JSONParser#pair.
FormattedJSONextListener.prototype.exitPair = function(ctx) {
};

// Enter a parse tree produced by JSONextParser#cdrpair.
FormattedJSONextListener.prototype.enterCdrpair = function(ctx) {
  this.out += ",";
  this.out += "\n";
  this.out += "  ";
  this.out += ctx.STRING().getText();
  this.out += ": ";
};

// Exit a parse tree produced by JSONextParser#cdrpair.
FormattedJSONextListener.prototype.exitCdrpair = function(ctx) {
};

// Enter a parse tree produced by JSONParser#array.
FormattedJSONextListener.prototype.enterArray = function(ctx) {
  this.out += "[";
};

// Exit a parse tree produced by JSONParser#array.
FormattedJSONextListener.prototype.exitArray = function(ctx) {
  this.out += "]";
};

// Enter a parse tree produced by JSONextParser#topvalue.
FormattedJSONextListener.prototype.enterTopvalue = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#topvalue.
FormattedJSONextListener.prototype.exitTopvalue = function(ctx) {
};

// Enter a parse tree produced by JSONParser#value.
FormattedJSONextListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by JSONParser#value.
FormattedJSONextListener.prototype.exitValue = function(ctx) {
  this.out += getValueText(ctx);
};

// Enter a parse tree produced by JSONextParser#cdrvalue.
FormattedJSONextListener.prototype.enterCdrvalue = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#cdrvalue.
FormattedJSONextListener.prototype.exitCdrvalue = function(ctx) {
  this.out += ",";
  this.out += getValueText(ctx);
};


function getValueText(ctx){
  debugger;
  if (ctx.STRING() !== null) return ctx.STRING().getText();
  if (ctx.NUMBER() !== null) return ctx.NUMBER().getText();
  //if (ctx.obj() !== null) return ctx.obj().getText();
  //if (ctx.array() !== null) return ctx.array().getText();
  if (ctx.getText !== null) return ctx.getText();
  return "";
}

exports.FormattedJSONextListener = FormattedJSONextListener;
