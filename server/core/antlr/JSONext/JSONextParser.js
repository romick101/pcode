// Generated from grammars/JSONext.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var JSONextListener = require('./JSONextListener').JSONextListener;
var grammarFileName = "JSONext.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u000eU\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003\u0018\n\u0003\f\u0003\u000e\u0003\u001b\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003!\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006/\n\u0006\f\u0006\u000e\u00062\u000b\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u00068\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\bC\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tS\n\t\u0003",
    "\t\u0002\u0002\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0002\\\u0002",
    "\u0012\u0003\u0002\u0002\u0002\u0004 \u0003\u0002\u0002\u0002\u0006",
    "\"\u0003\u0002\u0002\u0002\b&\u0003\u0002\u0002\u0002\n7\u0003\u0002",
    "\u0002\u0002\f9\u0003\u0002\u0002\u0002\u000eB\u0003\u0002\u0002\u0002",
    "\u0010R\u0003\u0002\u0002\u0002\u0012\u0013\u0005\f\u0007\u0002\u0013",
    "\u0003\u0003\u0002\u0002\u0002\u0014\u0015\u0007\u0003\u0002\u0002\u0015",
    "\u0019\u0005\u0006\u0004\u0002\u0016\u0018\u0005\b\u0005\u0002\u0017",
    "\u0016\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019",
    "\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a",
    "\u001c\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c",
    "\u001d\u0007\u0004\u0002\u0002\u001d!\u0003\u0002\u0002\u0002\u001e",
    "\u001f\u0007\u0003\u0002\u0002\u001f!\u0007\u0004\u0002\u0002 \u0014",
    "\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002!\u0005\u0003",
    "\u0002\u0002\u0002\"#\u0007\f\u0002\u0002#$\u0007\u0005\u0002\u0002",
    "$%\u0005\u000e\b\u0002%\u0007\u0003\u0002\u0002\u0002&\'\u0007\u0006",
    "\u0002\u0002\'(\u0007\f\u0002\u0002()\u0007\u0005\u0002\u0002)*\u0005",
    "\u000e\b\u0002*\t\u0003\u0002\u0002\u0002+,\u0007\u0007\u0002\u0002",
    ",0\u0005\u000e\b\u0002-/\u0005\u0010\t\u0002.-\u0003\u0002\u0002\u0002",
    "/2\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u000201\u0003\u0002\u0002",
    "\u000213\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000234\u0007\b",
    "\u0002\u000248\u0003\u0002\u0002\u000256\u0007\u0007\u0002\u000268\u0007",
    "\b\u0002\u00027+\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u00028",
    "\u000b\u0003\u0002\u0002\u00029:\u0005\u000e\b\u0002:\r\u0003\u0002",
    "\u0002\u0002;C\u0007\f\u0002\u0002<C\u0007\r\u0002\u0002=C\u0005\u0004",
    "\u0003\u0002>C\u0005\n\u0006\u0002?C\u0007\t\u0002\u0002@C\u0007\n\u0002",
    "\u0002AC\u0007\u000b\u0002\u0002B;\u0003\u0002\u0002\u0002B<\u0003\u0002",
    "\u0002\u0002B=\u0003\u0002\u0002\u0002B>\u0003\u0002\u0002\u0002B?\u0003",
    "\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002BA\u0003\u0002\u0002\u0002",
    "C\u000f\u0003\u0002\u0002\u0002DE\u0007\u0006\u0002\u0002ES\u0007\f",
    "\u0002\u0002FG\u0007\u0006\u0002\u0002GS\u0007\r\u0002\u0002HI\u0007",
    "\u0006\u0002\u0002IS\u0005\u0004\u0003\u0002JK\u0007\u0006\u0002\u0002",
    "KS\u0005\n\u0006\u0002LM\u0007\u0006\u0002\u0002MS\u0007\t\u0002\u0002",
    "NO\u0007\u0006\u0002\u0002OS\u0007\n\u0002\u0002PQ\u0007\u0006\u0002",
    "\u0002QS\u0007\u000b\u0002\u0002RD\u0003\u0002\u0002\u0002RF\u0003\u0002",
    "\u0002\u0002RH\u0003\u0002\u0002\u0002RJ\u0003\u0002\u0002\u0002RL\u0003",
    "\u0002\u0002\u0002RN\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002",
    "S\u0011\u0003\u0002\u0002\u0002\b\u0019 07BR"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "'}'", "':'", "','", "'['", "']'", "'true'", 
                     "'false'", "'null'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, "STRING", "NUMBER", "WS" ];

var ruleNames =  [ "json", "obj", "pair", "cdrpair", "array", "topvalue", 
                   "value", "cdrvalue" ];

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
JSONextParser.RULE_cdrvalue = 7;

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
        this.state = 16;
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
        this.state = 30;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 18;
            this.match(JSONextParser.T__0);
            this.state = 19;
            this.pair();
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSONextParser.T__3) {
                this.state = 20;
                this.cdrpair();
                this.state = 25;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 26;
            this.match(JSONextParser.T__1);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 28;
            this.match(JSONextParser.T__0);
            this.state = 29;
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
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(JSONextParser.STRING);
        this.state = 33;
        this.match(JSONextParser.T__2);
        this.state = 34;
        this.value();
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
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.match(JSONextParser.T__3);
        this.state = 37;
        this.match(JSONextParser.STRING);
        this.state = 38;
        this.match(JSONextParser.T__2);
        this.state = 39;
        this.value();
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
        this.state = 53;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 41;
            this.match(JSONextParser.T__4);
            this.state = 42;
            this.value();
            this.state = 46;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSONextParser.T__3) {
                this.state = 43;
                this.cdrvalue();
                this.state = 48;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 49;
            this.match(JSONextParser.T__5);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.match(JSONextParser.T__4);
            this.state = 52;
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
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.value();
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

ValueContext.prototype.obj = function() {
    return this.getTypedRuleContext(ObjContext,0);
};

ValueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
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
    try {
        this.state = 64;
        switch(this._input.LA(1)) {
        case JSONextParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 57;
            this.match(JSONextParser.STRING);
            break;
        case JSONextParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.match(JSONextParser.NUMBER);
            break;
        case JSONextParser.T__0:
            this.enterOuterAlt(localctx, 3);
            this.state = 59;
            this.obj();
            break;
        case JSONextParser.T__4:
            this.enterOuterAlt(localctx, 4);
            this.state = 60;
            this.array();
            break;
        case JSONextParser.T__6:
            this.enterOuterAlt(localctx, 5);
            this.state = 61;
            this.match(JSONextParser.T__6);
            break;
        case JSONextParser.T__7:
            this.enterOuterAlt(localctx, 6);
            this.state = 62;
            this.match(JSONextParser.T__7);
            break;
        case JSONextParser.T__8:
            this.enterOuterAlt(localctx, 7);
            this.state = 63;
            this.match(JSONextParser.T__8);
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

CdrvalueContext.prototype.obj = function() {
    return this.getTypedRuleContext(ObjContext,0);
};

CdrvalueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
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
    this.enterRule(localctx, 14, JSONextParser.RULE_cdrvalue);
    try {
        this.state = 80;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 66;
            this.match(JSONextParser.T__3);
            this.state = 67;
            this.match(JSONextParser.STRING);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 68;
            this.match(JSONextParser.T__3);
            this.state = 69;
            this.match(JSONextParser.NUMBER);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 70;
            this.match(JSONextParser.T__3);
            this.state = 71;
            this.obj();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 72;
            this.match(JSONextParser.T__3);
            this.state = 73;
            this.array();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 74;
            this.match(JSONextParser.T__3);
            this.state = 75;
            this.match(JSONextParser.T__6);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 76;
            this.match(JSONextParser.T__3);
            this.state = 77;
            this.match(JSONextParser.T__7);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 78;
            this.match(JSONextParser.T__3);
            this.state = 79;
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


exports.JSONextParser = JSONextParser;
