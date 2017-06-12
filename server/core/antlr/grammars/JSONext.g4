grammar JSONext;

json
   : topvalue
   ;

obj
   : '{' pair cdrpair* '}'
   | '{' '}'
   ;

pair
   : STRING ':' nonterminalvalue
   | STRING ':' value
   ;

cdrpair
   : ',' STRING ':' nonterminalvalue
   | ',' STRING ':' value
   ;

array
   : '[' nonterminalvalue nonterminalcdrvalue* ']'
   | '[' value cdrvalue* ']'
   | '[' ']'
   ;

topvalue
   : nonterminalvalue
   | value
   ;

value
   : STRING
   | NUMBER
   | 'true'
   | 'false'
   | 'null'
   ;

nonterminalvalue
   : obj
   | array
   ;

cdrvalue
   : ',' STRING
   | ',' NUMBER
   | ',' 'true'
   | ',' 'false'
   | ',' 'null'
   ;

nonterminalcdrvalue
   : ',' obj
   | ',' array
   ;

STRING
   : '"' (ESC | ~ ["\\])* '"'
   ;
fragment ESC
   : '\\' (["\\/bfnrt] | UNICODE)
   ;
fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;
fragment HEX
   : [0-9a-fA-F]
   ;
NUMBER
   : '-'? INT '.' [0-9] + EXP? | '-'? INT EXP | '-'? INT
   ;
fragment INT
   : '0' | [1-9] [0-9]*
   ;
// no leading zeros
fragment EXP
   : [Ee] [+\-]? INT
   ;
// \- since - means "range" inside [...]
WS
   : [ \t\n\r] + -> skip
   ;
