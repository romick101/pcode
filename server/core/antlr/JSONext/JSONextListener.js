// Generated from grammars/JSONext.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by JSONextParser.
function JSONextListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

JSONextListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
JSONextListener.prototype.constructor = JSONextListener;

// Enter a parse tree produced by JSONextParser#json.
JSONextListener.prototype.enterJson = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#json.
JSONextListener.prototype.exitJson = function(ctx) {
};


// Enter a parse tree produced by JSONextParser#obj.
JSONextListener.prototype.enterObj = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#obj.
JSONextListener.prototype.exitObj = function(ctx) {
};


// Enter a parse tree produced by JSONextParser#pair.
JSONextListener.prototype.enterPair = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#pair.
JSONextListener.prototype.exitPair = function(ctx) {
};


// Enter a parse tree produced by JSONextParser#cdrpair.
JSONextListener.prototype.enterCdrpair = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#cdrpair.
JSONextListener.prototype.exitCdrpair = function(ctx) {
};


// Enter a parse tree produced by JSONextParser#array.
JSONextListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#array.
JSONextListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by JSONextParser#topvalue.
JSONextListener.prototype.enterTopvalue = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#topvalue.
JSONextListener.prototype.exitTopvalue = function(ctx) {
};


// Enter a parse tree produced by JSONextParser#value.
JSONextListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#value.
JSONextListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by JSONextParser#nonterminalvalue.
JSONextListener.prototype.enterNonterminalvalue = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#nonterminalvalue.
JSONextListener.prototype.exitNonterminalvalue = function(ctx) {
};


// Enter a parse tree produced by JSONextParser#cdrvalue.
JSONextListener.prototype.enterCdrvalue = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#cdrvalue.
JSONextListener.prototype.exitCdrvalue = function(ctx) {
};


// Enter a parse tree produced by JSONextParser#nonterminalcdrvalue.
JSONextListener.prototype.enterNonterminalcdrvalue = function(ctx) {
};

// Exit a parse tree produced by JSONextParser#nonterminalcdrvalue.
JSONextListener.prototype.exitNonterminalcdrvalue = function(ctx) {
};



exports.JSONextListener = JSONextListener;