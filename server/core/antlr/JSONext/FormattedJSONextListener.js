const antlr4 = require ('antlr4/index');
const chalk = require ('chalk');
const JSONextLexer = require ('./JSONextLexer');
const JSONextParser = require ('./JSONextParser');
const JSONextListener = require ('./JSONextListener').JSONextListener;

FormattedJSONextListener = function (out) {
  this.out = out;
  this.spaces = 0;

  JSONextListener.call(this);
  return this;
}

FormattedJSONextListener.prototype = Object.create(JSONextListener.prototype);
FormattedJSONextListener.prototype.constructor = FormattedJSONextListener;

FormattedJSONextListener.prototype.enterJson = function(ctx) {
}

// Exit a parse tree produced by JSONParser#json.
FormattedJSONextListener.prototype.exitJson = function(ctx) {
  this.spaces -= 2;
};


// Enter a parse tree produced by JSONParser#obj.
FormattedJSONextListener.prototype.enterObj = function(ctx) {
  this.out += "{\n";
  this.spaces += 2;
};

// Exit a parse tree produced by JSONParser#obj.
FormattedJSONextListener.prototype.exitObj = function(ctx) {
  this.out += "\n";
  this.putSpaces();
  this.out += "}";
  this.spaces -=2;
};


// Enter a parse tree produced by JSONParser#pair.
FormattedJSONextListener.prototype.enterPair = function(ctx) {
  this.putSpaces();
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
  this.putSpaces();
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

// Enter a parse tree produced by JSONextParser#nonterminalvalue.
FormattedJSONextListener.prototype.enterNonterminalvalue = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#nonterminalvalue.
FormattedJSONextListener.prototype.exitNonterminalvalue = function(ctx) {
};

// Enter a parse tree produced by JSONextParser#cdrvalue.
FormattedJSONextListener.prototype.enterCdrvalue = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#cdrvalue.
FormattedJSONextListener.prototype.exitCdrvalue = function(ctx) {
  this.out += ",";
  this.out += getValueText(ctx);
};

// Enter a parse tree produced by JSONextParser#nonterminalcdrvalue.
FormattedJSONextListener.prototype.enterNonterminalcdrvalue = function(ctx) {
  this.out += ", ";
};

// Exit a parse tree produced by JSONextParser#nonterminalcdrvalue.
FormattedJSONextListener.prototype.exitNonterminalcdrvalue = function(ctx) {
};

FormattedJSONextListener.prototype.putSpaces = function () {
  for (var i = 0; i < this.spaces ; i++) {
    this.out += " ";
  }
}

function getValueText(ctx){
  if (ctx.STRING() !== null) return ctx.STRING().getText();
  if (ctx.NUMBER() !== null) return ctx.NUMBER().getText();
  if (ctx.getText !== null) return ctx.getText();
  return "";
}


exports.FormattedJSONextListener = FormattedJSONextListener;
