// Generated from grammars/JSONext.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var JSONextListener = require('./JSONextListener').JSONextListener;
var grammarFileName = "JSONext.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u000em\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001c\n\u0003",
    "\f\u0003\u000e\u0003\u001f\u000b\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003%\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004-\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u00057\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0007\u0006<\n\u0006\f\u0006\u000e\u0006?\u000b\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006F\n\u0006",
    "\f\u0006\u000e\u0006I\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006O\n\u0006\u0003\u0007\u0003\u0007\u0005\u0007",
    "S\n\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0005\tY\n\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005",
    "\ne\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "k\n\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0002\u0003\u0003\u0002\t\rq\u0002\u0016\u0003\u0002\u0002",
    "\u0002\u0004$\u0003\u0002\u0002\u0002\u0006,\u0003\u0002\u0002\u0002",
    "\b6\u0003\u0002\u0002\u0002\nN\u0003\u0002\u0002\u0002\fR\u0003\u0002",
    "\u0002\u0002\u000eT\u0003\u0002\u0002\u0002\u0010X\u0003\u0002\u0002",
    "\u0002\u0012d\u0003\u0002\u0002\u0002\u0014j\u0003\u0002\u0002\u0002",
    "\u0016\u0017\u0005\f\u0007\u0002\u0017\u0003\u0003\u0002\u0002\u0002",
    "\u0018\u0019\u0007\u0003\u0002\u0002\u0019\u001d\u0005\u0006\u0004\u0002",
    "\u001a\u001c\u0005\b\u0005\u0002\u001b\u001a\u0003\u0002\u0002\u0002",
    "\u001c\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002",
    "\u001d\u001e\u0003\u0002\u0002\u0002\u001e \u0003\u0002\u0002\u0002",
    "\u001f\u001d\u0003\u0002\u0002\u0002 !\u0007\u0004\u0002\u0002!%\u0003",
    "\u0002\u0002\u0002\"#\u0007\u0003\u0002\u0002#%\u0007\u0004\u0002\u0002",
    "$\u0018\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002%\u0005\u0003",
    "\u0002\u0002\u0002&\'\u0007\f\u0002\u0002\'(\u0007\u0005\u0002\u0002",
    "(-\u0005\u0010\t\u0002)*\u0007\f\u0002\u0002*+\u0007\u0005\u0002\u0002",
    "+-\u0005\u000e\b\u0002,&\u0003\u0002\u0002\u0002,)\u0003\u0002\u0002",
    "\u0002-\u0007\u0003\u0002\u0002\u0002./\u0007\u0006\u0002\u0002/0\u0007",
    "\f\u0002\u000201\u0007\u0005\u0002\u000217\u0005\u0010\t\u000223\u0007",
    "\u0006\u0002\u000234\u0007\f\u0002\u000245\u0007\u0005\u0002\u00025",
    "7\u0005\u000e\b\u00026.\u0003\u0002\u0002\u000262\u0003\u0002\u0002",
    "\u00027\t\u0003\u0002\u0002\u000289\u0007\u0007\u0002\u00029=\u0005",
    "\u0010\t\u0002:<\u0005\u0014\u000b\u0002;:\u0003\u0002\u0002\u0002<",
    "?\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002",
    "\u0002>@\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@A\u0007\b",
    "\u0002\u0002AO\u0003\u0002\u0002\u0002BC\u0007\u0007\u0002\u0002CG\u0005",
    "\u000e\b\u0002DF\u0005\u0012\n\u0002ED\u0003\u0002\u0002\u0002FI\u0003",
    "\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002",
    "HJ\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002JK\u0007\b\u0002",
    "\u0002KO\u0003\u0002\u0002\u0002LM\u0007\u0007\u0002\u0002MO\u0007\b",
    "\u0002\u0002N8\u0003\u0002\u0002\u0002NB\u0003\u0002\u0002\u0002NL\u0003",
    "\u0002\u0002\u0002O\u000b\u0003\u0002\u0002\u0002PS\u0005\u0010\t\u0002",
    "QS\u0005\u000e\b\u0002RP\u0003\u0002\u0002\u0002RQ\u0003\u0002\u0002",
    "\u0002S\r\u0003\u0002\u0002\u0002TU\t\u0002\u0002\u0002U\u000f\u0003",
    "\u0002\u0002\u0002VY\u0005\u0004\u0003\u0002WY\u0005\n\u0006\u0002X",
    "V\u0003\u0002\u0002\u0002XW\u0003\u0002\u0002\u0002Y\u0011\u0003\u0002",
    "\u0002\u0002Z[\u0007\u0006\u0002\u0002[e\u0007\f\u0002\u0002\\]\u0007",
    "\u0006\u0002\u0002]e\u0007\r\u0002\u0002^_\u0007\u0006\u0002\u0002_",
    "e\u0007\t\u0002\u0002`a\u0007\u0006\u0002\u0002ae\u0007\n\u0002\u0002",
    "bc\u0007\u0006\u0002\u0002ce\u0007\u000b\u0002\u0002dZ\u0003\u0002\u0002",
    "\u0002d\\\u0003\u0002\u0002\u0002d^\u0003\u0002\u0002\u0002d`\u0003",
    "\u0002\u0002\u0002db\u0003\u0002\u0002\u0002e\u0013\u0003\u0002\u0002",
    "\u0002fg\u0007\u0006\u0002\u0002gk\u0005\u0004\u0003\u0002hi\u0007\u0006",
    "\u0002\u0002ik\u0005\n\u0006\u0002jf\u0003\u0002\u0002\u0002jh\u0003",
    "\u0002\u0002\u0002k\u0015\u0003\u0002\u0002\u0002\r\u001d$,6=GNRXdj"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "'}'", "':'", "','", "'['", "']'", "'true'", 
                     "'false'", "'null'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, "STRING", "NUMBER", "WS" ];

var ruleNames =  [ "json", "obj", "pair", "cdrpair", "array", "topvalue", 
                   "value", "nonterminalvalue", "cdrvalue", "nonterminalcdrvalue" ];

function JSONextParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

JSONextParser.prototype = Object.create(antlr4.Parser.prototype);
JSONextParser.prototype.constructor = JSONextParser;

Object.defineProperty(JSONextParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

JSONextParser.EOF = antlr4.Token.EOF;
JSONextParser.T__0 = 1;
JSONextParser.T__1 = 2;
JSONextParser.T__2 = 3;
JSONextParser.T__3 = 4;
JSONextParser.T__4 = 5;
JSONextParser.T__5 = 6;
JSONextParser.T__6 = 7;
JSONextParser.T__7 = 8;
JSONextParser.T__8 = 9;
JSONextParser.STRING = 10;
JSONextParser.NUMBER = 11;
JSONextParser.WS = 12;

JSONextParser.RULE_json = 0;
JSONextParser.RULE_obj = 1;
JSONextParser.RULE_pair = 2;
JSONextParser.RULE_cdrpair = 3;
JSONextParser.RULE_array = 4;
JSONextParser.RULE_topvalue = 5;
JSONextParser.RULE_value = 6;
JSONextParser.RULE_nonterminalvalue = 7;
JSONextParser.RULE_cdrvalue = 8;
JSONextParser.RULE_nonterminalcdrvalue = 9;

function JsonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONextParser.RULE_json;
    return this;
}

JsonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JsonContext.prototype.constructor = JsonContext;

JsonContext.prototype.topvalue = function() {
    return this.getTypedRuleContext(TopvalueContext,0);
};

JsonContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.enterJson(this);
	}
};

JsonContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.exitJson(this);
	}
};




JSONextParser.JsonContext = JsonContext;

JSONextParser.prototype.json = function() {

    var localctx = new JsonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, JSONextParser.RULE_json);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.topvalue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONextParser.RULE_obj;
    return this;
}

ObjContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjContext.prototype.constructor = ObjContext;

ObjContext.prototype.pair = function() {
    return this.getTypedRuleContext(PairContext,0);
};

ObjContext.prototype.cdrpair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CdrpairContext);
    } else {
        return this.getTypedRuleContext(CdrpairContext,i);
    }
};

ObjContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.enterObj(this);
	}
};

ObjContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.exitObj(this);
	}
};




JSONextParser.ObjContext = ObjContext;

JSONextParser.prototype.obj = function() {

    var localctx = new ObjContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, JSONextParser.RULE_obj);
    var _la = 0; // Token type
    try {
        this.state = 34;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 22;
            this.match(JSONextParser.T__0);
            this.state = 23;
            this.pair();
            this.state = 27;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSONextParser.T__3) {
                this.state = 24;
                this.cdrpair();
                this.state = 29;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 30;
            this.match(JSONextParser.T__1);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 32;
            this.match(JSONextParser.T__0);
            this.state = 33;
            this.match(JSONextParser.T__1);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONextParser.RULE_pair;
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.STRING = function() {
    return this.getToken(JSONextParser.STRING, 0);
};

PairContext.prototype.nonterminalvalue = function() {
    return this.getTypedRuleContext(NonterminalvalueContext,0);
};

PairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PairContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.enterPair(this);
	}
};

PairContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.exitPair(this);
	}
};




JSONextParser.PairContext = PairContext;

JSONextParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, JSONextParser.RULE_pair);
    try {
        this.state = 42;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 36;
            this.match(JSONextParser.STRING);
            this.state = 37;
            this.match(JSONextParser.T__2);
            this.state = 38;
            this.nonterminalvalue();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 39;
            this.match(JSONextParser.STRING);
            this.state = 40;
            this.match(JSONextParser.T__2);
            this.state = 41;
            this.value();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CdrpairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONextParser.RULE_cdrpair;
    return this;
}

CdrpairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CdrpairContext.prototype.constructor = CdrpairContext;

CdrpairContext.prototype.STRING = function() {
    return this.getToken(JSONextParser.STRING, 0);
};

CdrpairContext.prototype.nonterminalvalue = function() {
    return this.getTypedRuleContext(NonterminalvalueContext,0);
};

CdrpairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

CdrpairContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.enterCdrpair(this);
	}
};

CdrpairContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.exitCdrpair(this);
	}
};




JSONextParser.CdrpairContext = CdrpairContext;

JSONextParser.prototype.cdrpair = function() {

    var localctx = new CdrpairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, JSONextParser.RULE_cdrpair);
    try {
        this.state = 52;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 44;
            this.match(JSONextParser.T__3);
            this.state = 45;
            this.match(JSONextParser.STRING);
            this.state = 46;
            this.match(JSONextParser.T__2);
            this.state = 47;
            this.nonterminalvalue();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 48;
            this.match(JSONextParser.T__3);
            this.state = 49;
            this.match(JSONextParser.STRING);
            this.state = 50;
            this.match(JSONextParser.T__2);
            this.state = 51;
            this.value();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONextParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.nonterminalvalue = function() {
    return this.getTypedRuleContext(NonterminalvalueContext,0);
};

ArrayContext.prototype.nonterminalcdrvalue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NonterminalcdrvalueContext);
    } else {
        return this.getTypedRuleContext(NonterminalcdrvalueContext,i);
    }
};

ArrayContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ArrayContext.prototype.cdrvalue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CdrvalueContext);
    } else {
        return this.getTypedRuleContext(CdrvalueContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.exitArray(this);
	}
};




JSONextParser.ArrayContext = ArrayContext;

JSONextParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, JSONextParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.state = 76;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 54;
            this.match(JSONextParser.T__4);
            this.state = 55;
            this.nonterminalvalue();
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSONextParser.T__3) {
                this.state = 56;
                this.nonterminalcdrvalue();
                this.state = 61;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 62;
            this.match(JSONextParser.T__5);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 64;
            this.match(JSONextParser.T__4);
            this.state = 65;
            this.value();
            this.state = 69;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSONextParser.T__3) {
                this.state = 66;
                this.cdrvalue();
                this.state = 71;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 72;
            this.match(JSONextParser.T__5);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 74;
            this.match(JSONextParser.T__4);
            this.state = 75;
            this.match(JSONextParser.T__5);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TopvalueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONextParser.RULE_topvalue;
    return this;
}

TopvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TopvalueContext.prototype.constructor = TopvalueContext;

TopvalueContext.prototype.nonterminalvalue = function() {
    return this.getTypedRuleContext(NonterminalvalueContext,0);
};

TopvalueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

TopvalueContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.enterTopvalue(this);
	}
};

TopvalueContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.exitTopvalue(this);
	}
};




JSONextParser.TopvalueContext = TopvalueContext;

JSONextParser.prototype.topvalue = function() {

    var localctx = new TopvalueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, JSONextParser.RULE_topvalue);
    try {
        this.state = 80;
        switch(this._input.LA(1)) {
        case JSONextParser.T__0:
        case JSONextParser.T__4:
            this.enterOuterAlt(localctx, 1);
            this.state = 78;
            this.nonterminalvalue();
            break;
        case JSONextParser.T__6:
        case JSONextParser.T__7:
        case JSONextParser.T__8:
        case JSONextParser.STRING:
        case JSONextParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 79;
            this.value();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONextParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.STRING = function() {
    return this.getToken(JSONextParser.STRING, 0);
};

ValueContext.prototype.NUMBER = function() {
    return this.getToken(JSONextParser.NUMBER, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.exitValue(this);
	}
};




JSONextParser.ValueContext = ValueContext;

JSONextParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, JSONextParser.RULE_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSONextParser.T__6) | (1 << JSONextParser.T__7) | (1 << JSONextParser.T__8) | (1 << JSONextParser.STRING) | (1 << JSONextParser.NUMBER))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NonterminalvalueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONextParser.RULE_nonterminalvalue;
    return this;
}

NonterminalvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NonterminalvalueContext.prototype.constructor = NonterminalvalueContext;

NonterminalvalueContext.prototype.obj = function() {
    return this.getTypedRuleContext(ObjContext,0);
};

NonterminalvalueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

NonterminalvalueContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.enterNonterminalvalue(this);
	}
};

NonterminalvalueContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.exitNonterminalvalue(this);
	}
};




JSONextParser.NonterminalvalueContext = NonterminalvalueContext;

JSONextParser.prototype.nonterminalvalue = function() {

    var localctx = new NonterminalvalueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, JSONextParser.RULE_nonterminalvalue);
    try {
        this.state = 86;
        switch(this._input.LA(1)) {
        case JSONextParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 84;
            this.obj();
            break;
        case JSONextParser.T__4:
            this.enterOuterAlt(localctx, 2);
            this.state = 85;
            this.array();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CdrvalueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONextParser.RULE_cdrvalue;
    return this;
}

CdrvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CdrvalueContext.prototype.constructor = CdrvalueContext;

CdrvalueContext.prototype.STRING = function() {
    return this.getToken(JSONextParser.STRING, 0);
};

CdrvalueContext.prototype.NUMBER = function() {
    return this.getToken(JSONextParser.NUMBER, 0);
};

CdrvalueContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.enterCdrvalue(this);
	}
};

CdrvalueContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.exitCdrvalue(this);
	}
};




JSONextParser.CdrvalueContext = CdrvalueContext;

JSONextParser.prototype.cdrvalue = function() {

    var localctx = new CdrvalueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, JSONextParser.RULE_cdrvalue);
    try {
        this.state = 98;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.match(JSONextParser.T__3);
            this.state = 89;
            this.match(JSONextParser.STRING);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 90;
            this.match(JSONextParser.T__3);
            this.state = 91;
            this.match(JSONextParser.NUMBER);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 92;
            this.match(JSONextParser.T__3);
            this.state = 93;
            this.match(JSONextParser.T__6);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 94;
            this.match(JSONextParser.T__3);
            this.state = 95;
            this.match(JSONextParser.T__7);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 96;
            this.match(JSONextParser.T__3);
            this.state = 97;
            this.match(JSONextParser.T__8);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NonterminalcdrvalueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONextParser.RULE_nonterminalcdrvalue;
    return this;
}

NonterminalcdrvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NonterminalcdrvalueContext.prototype.constructor = NonterminalcdrvalueContext;

NonterminalcdrvalueContext.prototype.obj = function() {
    return this.getTypedRuleContext(ObjContext,0);
};

NonterminalcdrvalueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

NonterminalcdrvalueContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.enterNonterminalcdrvalue(this);
	}
};

NonterminalcdrvalueContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONextListener ) {
        listener.exitNonterminalcdrvalue(this);
	}
};




JSONextParser.NonterminalcdrvalueContext = NonterminalcdrvalueContext;

JSONextParser.prototype.nonterminalcdrvalue = function() {

    var localctx = new NonterminalcdrvalueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, JSONextParser.RULE_nonterminalcdrvalue);
    try {
        this.state = 104;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 100;
            this.match(JSONextParser.T__3);
            this.state = 101;
            this.obj();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 102;
            this.match(JSONextParser.T__3);
            this.state = 103;
            this.array();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.JSONextParser = JSONextParser;
