function convert(str) {
  console.log("called the little convert");
  return trimSpaces(str);
  let splitedLine = str.split('\n');
  let newLineStr = "";
  for (let sl of splitedLine){
    let splited = sl.split(' ');
    let newstring = "";
    for (let s of splited){
      newstring += plusminus(s);
    }
    newLineStr += newstring + "\n";
  }

  return newLineStr;
}
function trimSpaces(str){
    return str.replace(/\s\s+/g, ' ');
}
function plusminus(str){
  for (let sym of ['+','-']){
    if (str.includes(sym)){
      let splited = str.split(sym);
      let newstring = plusminus(splited[0]) + sym + plusminus(splited[1]);
      return newstring;
    }
  }
  return multidivision(str);
}

function multidivision(str){
  if (str.includes("*")){
    let splited = str.split("*");
    let newstring = multidivision(splited[0])+" \\cdot "+multidivision(splited[1]);
    return newstring;
  }
  if (str.includes("/") && str.split("/")){
    let splited = str.split("/");
    let newstring = "\\frac{"+multidivision(splited[0])+"}{"+multidivision(splited[1])+"}";
    return newstring;
  }
  return script(str);
}

function script(str){
  for (let sym of ['^','_']){
    if (str.includes(sym)){
      let splited = str.split(sym);
      let newstring = "";
      for (let i = 0; i < splited.length; i++){
        let s = splited[i];
        let t = script(s);
        if (i > 0 && t.length > 1){
          t = "{"+t+"}"
        }
        newstring += t;
        if (i < splited.length - 1){
          newstring += sym;
        }
      }
      return newstring;
    }
  }
  return map1(str);
}

function map1(str){
  const map = new Map();
  map.set("sin", "\\sin ");
  map.set("cos", "\\cos ");
  let iterator = map.keys();
  let temp;
  temp = iterator.next().value;
  let newstring = "";
  while (temp){
    if (str.includes(temp)){
      let splited = str.split(temp);
      for (let i = 0; i < splited.length; i++){
        let s = splited[i];
        let t = map1(s);
        newstring += t;
        if (i < splited.length - 1){
          newstring += map.get(temp);
        }
      }
    }
    temp = iterator.next().value;
    //iterator.next();
  }
  if (newstring == ""){
    return map2(str);
  } else {
    return map2(newstring);
  }
}

function map2(str){
  const map = new Map();
  map.set("le", "\\le");
  map.set('ge', "\\ge");

  if (map.has(str)){
    return " " + map.get(str) + " ";
  } else {
    return str;
  }
}

function numberQ(str) {
    return (/^[0-9\.,]+$/).test(str);
}
function variableQ(str) {
    return (/^[a-zA-Z]+$/).test(str);
}
function symbolQ(str) {
    return (/^&[a-zA-Z]+;$/).test(str);
}
function numbervariableQ(str) {
    return (/^[0-9\.,].*[a-zA-Z]$/).test(str);
}
function atomicQ(str) {
    return variableQ(str) || numberQ(str)
}
function singletonQ(str) {
  // need to include things like Greek letters
  // the issue is whether  quantity ... endquantity  is needed
    return numberQ(str) || str.length == 1 ||
        (str.trim() in dictionary && dictionary[str.trim()]["type"] == "symbol")
}

function convertSymbol(str, conversiontype) {
    let ans = str;

    if(conversiontype == "SpaceMath2MathML") {
        ans = dictionary[ans]["ruleML"]
    } else if (conversiontype == "SpaceMath2speech") {
        ans = dictionary[ans]["speech"]
    } else {
        ans = dictionary[ans]["rule"]
    }
    return ans
}

function markAtomicItem(str, conversiontype) {
  if(numbervariableQ(str)) {
    let numberpart = str.replace(/[a-zA-Z]+$/, "");
    let variablepart = str.replace(/^[0-9\.,]+/, "");
    console.log("found mixed", str, "with parts", numberpart, ",", variablepart);
    numberpart = markAtomicItem(numberpart, conversiontype);
    variablepart = markAtomicItem(variablepart, conversiontype);
    let multiplication = "";
    if(conversiontype == "SpaceMath2MathML") { multiplication = "<mo>&InvisibleTimes;</mo>"}
    else if(conversiontype == "SpaceMath2speech") { multiplication = " times " }
    return numberpart + multiplication + variablepart
  }
  let ans = str;
console.log("markAtomicItem of", ans, "endans", symbolQ(str));
  if(conversiontype == "SpaceMath2MathML") {
    if(numberQ(str)) {
      ans = "<mn>"+ans+"</mn>"
    } else if(symbolQ(str)) {
      ans = "<mi>"+ans+"</mi>"
    } else if(variableQ(str)) {  // need to separate each letter
  //    ans = "<mi>"+ans+"</mi>"
      ans = ans.replace(/(.)/g, "<mi>$1</mi>");
    } else if(operatorsymbols.includes(str)) {
      ans = "<mo>"+ans+"</mo>"
    } else if(str.includes("mtext")) {  // probably text in math
      // do nothing
    } else {
      ans = "<unknown>"+ans+"</unknown>"
    }
  } else {
  }

  return ans
}

function markBrackets(str, conversiontype) {
  let ans = str;
console.log("markBrackets of", ans, "endans");
  if(conversiontype == "SpaceMath2MathML") {
    if(numberQ(ans)) {
        ans = "<mn>" + ans + "</mn>"
    } else {
        ans = "<mrow>" + ans + "</mrow>"
    }
  } else if(conversiontype == "SpaceMath2speech") {
    if(numberQ(ans)) {
        // nothign to do
    } else {
console.log("aDDing qUAntity",str);
        ans = "quantityC " + ans + " Cendquantity"
    }
  } else {
    ans = "{" + ans + "}"
  }
  return ans
}

// remove redundancies and un-necessary markup.  For example:
// <mrow><mi>x</mi></mrow> --> <mi>x</mi>
function simplify(str) {
    ans = str;

console.log("   starting to simplify", ans);
    for (let i=0; i <= 2; ++i) {
    ans = ans.replace(/to the quantity([A-Z]?) +negative 1 +([A-Z]?)endquantity/g, "inverse");

        ans = ans.replace(/(^| )quantity([A-Z]?) +([^ ]+) +([A-Z]?)endquantity/g, " $3 ");
        ans = ans.replace(/(^| )quantity([A-Z]?) +(negative +[^ ]+) +([A-Z]?)endquantity/g, " $3 ");
        ans = ans.replace(/<mrow ([^<>]+)><([a-z]+)>([^<>]+)(<\/$2>)<\/mrow>/g, "<$2 $1>$3$4");
        ans = ans.replace(/<mrow>(<([a-z]+)>)([^<>]+)(<\/$2>)<\/mrow>/g, "$1$3$4");
console.log("now ans", ans);
        ans = ans.replace(/<mrow>(<mi>)([^<>]+)(<\/mi>)<\/mrow>/g, "$1$2$3");
        ans = ans.replace(/<mrow>(<mn>)([^<>]+)(<\/mn>)<\/mrow>/g, "$1$2$3");

// next is quick and dirty: fails on some content. but note that we
// save the outer mrow in case of attributes
        ans = ans.replace(/(<mrow[^<>]*>)<mrow>([^w]*)<\/mrow>(<\/mrow>)/g, "$1$2$3");
// 3/12/23 above fails on <mrow><mrow><mo>-</mo><mi>s</mi></mrow></mrow>
        console.log("removed layer", i, "to get", ans);
    }

    ans = ans.replace(/quantity([A-Z]?)/g, "quantity");
    ans = ans.replace(/([A-Z]?)endquantity([A-Z]?)/g, "endquantity");
    ans = ans.replace(/(quantity *)quantity([^q]*)endquantity( *endquantity)/g, "$1$2$3");

    return ans
}

// convert common constructions to functional or infix notation,
// so that the existing tree structures can be used.

function preprocess(rawstring) {
    let str = rawstring;

    str = preprocessarithmetic(str);
console.log("after preprocessarithmetic", str);
    str = preprocessparentheses(str);
    str = preprocessbrackets(str);
//next two are called in preprocessarithmetic
//    str = preprocessintegrals(str);
//    str = preprocesslargeoperators(str);

console.log("before other", str);
    str = preprocessother(str);
console.log("after other", str);

    return str
}

function preprocessarithmetic(rawstring) {
    let str = rawstring;

    str = str.replace(/-->/g, 'longrightarrow');
    str = str.replace(/->/g, 'to');
    str = str.replace(/<--/g, 'longleftarrow');
    str = str.replace(/<-/g, 'from');
    str = str.replace(/(\$| |\(|\^|_)-([^ ])/g, '$1😑$2');  // negative sign
    str = str.replace(/(^|\$|\() *-/, '$1😑');  // negative sign

// groupings which seem to be needed to overcome the implied left-to-right(?) precedence
// should these be "wrapper" instead of literal parentheses?

// note that we introduce an error with e^5+sin(x) because of the parentheses
// inside the implied parentheses

// inline fractions
    str = str.replace(/([^ \(\)\[\]\{\}\$]*[^ \)\]}\/])(\/\/)/g, '[$1]//');  // numerator
    str = str.replace(/\/\/([^ \(\[{\/][^ \(\)\[\]\{\}\$]*)/g, '//{$1}');  // denominator

// over-under fractions
    str = str.replace(/([^ \(\)\[\]\{\}\$]*[^ \)\]}\/])(\/)/g, '[$1]/');  // numerator
    str = str.replace(/\/([^ \(\[{\/][^ \(\)\[\]\{\}\$]*)/g, '/{$1}');  // denominator
console.log("after preprocess fractions", str);

    for (const symbolname of greedyfunctions) {
        var regExStrStub = "(\\$| )" + symbolname + " " + "([^ \$]+)";
        var regExStr = regExStrStub + "( |\\$)";
        var regEx = new RegExp(regExStr, "g");
        str = str.replace(regEx, '$1' + symbolname + '($2)$3');
    }
// go back and see how e^x^2/2 is working

// XX    str = str.replace(/\^([^ \(\[{][^ \(\)\[\]\{\}\$]*)/, '^($1)');  // exponent
// XXconsole.log("after exponents once ", str);
// XX    str = str.replace(/\^([^ \(\[{][^ \(\)\[\]\{\}\$]*)/, '^($1)');  // exponent
// XXconsole.log("after exponents twice", str);
// XX    str = str.replace(/_([^ \(\[{\$][^ \^\(\)\[\]\{\}]*)/, '_($1)');  // subscript

// need to preprocess integrals, summation, etc, before wrapping bases

console.log("before operators", str);
    str = preprocessintegrals(str);
    str = preprocesslargeoperators(str);
console.log("after operators", str);

// XX    str = str.replace(/([^ *\/+\-\(\)\[\]\{\}\$]*[^ \)\]\}_])_/, '($1)_');  // base of subscript
// XX    str = str.replace(/([^ +*\/\-\(\)\[\]\{\}\$]*[^ \)\]\}\^])\^/, 'wrapper($1)^');  // base of exponent (danger from a_b^c)
// XXconsole.log("after bases once ", str);

 //   str = str.replace(/([0-9])([a-zA-Z\(\[\{])/g, '$1 $2'); // implied multiplication number times letter or group
// number-group mught not be multiplicaiton, as in  J_0(x)
    str = str.replace(/([0-9])([a-zA-Z])/g, '$1 $2'); // implied multiplication number times letter

// not so fast!
//  // we have previously put in grouping parentheses, so now we separate addition and subtraction
    str = str.replace(/([0-9a-zA-Z])(\+|-|\+-|-\+)([0-9a-zA-Z])/g, '$1 $2 $3');

    str = str.replace(/ \* /g, ' ⭐ '); // star/asterisk operator (retaining a*b for multiplication
// need a way to specify what * means

// maybe after number multiplication and +/- have been spaced out, it is okay to
// parenthesixe sub and superscript ( for things like 

console.log("before sub and sup grouping", str);

// go back and see how e^x^2/2 is working

    str = str.replace(/\^([^ \(\[{][^ \(\)\[\]\{\}\$]*)/, '^($1)');  // exponent
console.log("after exponents once ", str);
    str = str.replace(/\^([^ \(\[{][^ \(\)\[\]\{\}\$]*)/, '^($1)');  // exponent
console.log("after exponents twice", str);
    str = str.replace(/_([^ \(\[{\$][^ \^\(\)\[\]\{\}]*)/, '_($1)');  // subscript

console.log("after sub and sup grouping", str);

    str = str.replace(/([0-9])([\(\[\{])/g, '$1 $2'); // implied multiplication number times group

//  having )( is not always multiplication:  J_(0)(x)
    str = str.replace(/(_\([^\(\)]+)\)\(/g, '$1) ⚡ ('); // subscripted function application
    str = str.replace(/(\^\([^\(\)]+)\)\(/g, '$1) ⚡ ('); // superscripted function application
    str = str.replace(/\)\(/g, ') ('); // implied multiplication (.)(.)

    return str
}

function preprocessparentheses(rawstring) {
    let str = rawstring;

    str = str.replace(/(\$| )\(([^,()]+)\, +([^,()]+)\)/g, '$1($2) oointerval ($3)');  //open interval
    str = str.replace(/(\$| )gcd\( *([^,()]+)\, *([^,()]+) *\)/g, '$1($2) innergcd ($3)');
    str = str.replace(/(\$| )\( ([^,()]+)\, *([^,()]+) \)/g, '$1($2) gcd ($3)');
    str = str.replace(/(\$| )\(([^ ][^,()]*)\,([^ ][^,()]*)\)/g, '$1($2) cartesianpoint ($3)');

    return str
}

function preprocessbrackets(rawstring) {
    let str = rawstring;

// there are several construtions of the form
// leftdelimiter (spaceornospace) (leftcontent) (sornos) (middledelimeter) (rightc) (sornos) rightdelimiter .
// it would be good to fund a general way to handle those.

// the <...> with "|" have to come before the ones with only commas,
// because those can also contain commas
    str = str.replace(/(\$| )< ([^<>|]+) >/g, '$1span($2)');
console.log("did we find span?", str);
    str = str.replace(/(\$| )<([^<>|]+) \| ([^<>|]+)>/g, '$1($2) grouppresentation ($3)');
    str = str.replace(/(\$| |\(){([^{}|]+) \| ([^{}|]+)}/g, '$1($2) setbuilder ($3)');
    str = str.replace(/(\$| ){([^{}]+)}/g, '$1setof($2)');
    str = str.replace(/(\$| )<([^,<>|]+)\|([^,<>|]+)>/g, '$1($2) braket ($3)');
    str = str.replace(/(\$| )<([^,<>]+)\, ([^,<>]+)>/g, '$1($2) twovector ($3)');
console.log("looking for vector", str);
    str = str.replace(/(\$| )<([^ ,<>\$][^,<>\$]*)\, ([^<>\$]+)>/g, '$1vector($2, $3)');
console.log("did we find vector?", str);
    str = str.replace(/(\$| )<([^ ][^,<>]*)\,([^ ][^<>]*)>/g, '$1($2) innerproduct ($3)');
// catch all for every other case <...> of unknown meaning
    str = str.replace(/(\$| )<([^<>]+)>/g, '$1anglebrackets($2)');

    return str
}

function preprocessintegrals(rawstring) {
    let str = rawstring;

//    str = str.replace(/(\$| )intr\_\(([^()]+)\)\^\(([^()]+)\) ?(.*?) d([a-z])( |\$)/g, '$1limop(∫)($2)($3)($4)($5)$6');
    for (let [symbolname, symbol] of Object.entries(integrals)) {
console.log("looking for limits: symbolname", symbolname);
      if(str.includes(symbolname)) {
         symbolname = "\\\\?" + symbolname;  // hack to be partially backward compatible with TeX
// the lower and upper limits might be in parentheses.  We handle these awkwardly
         var regExStrStub = "(\\$| )" + symbolname + "\\_\\(([^() ]+)\\)\\^\\(([^()]+)\\) ?(.*?) d([a-z]+)";
         var regExStr = regExStrStub + "( |\\$)";
         var regExStrWeight = regExStrStub + "/([^ $]+)" + "( |\\$)";
console.log("regExStr", regExStr);
console.log("regExStrWeight", regExStrWeight);
         var regExWeight = new RegExp(regExStrWeight, "g");
         str = str.replace(regExWeight, '$1wrapper(intlimsweight(' + symbol + ')($2)($3)($4)($5)($6))$7');
         var regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1wrapper(intlims(' + symbol + ')($2)($3)($4)($5))$6');

         // case of no () around limits
         regExStrStub = "(\\$| )" + symbolname + "\\_([^ ]+?)\\^([^ ]+) (.*?) d([a-z]+)";
         regExStr = regExStrStub + "( |\\$)";
         regExStrWeight = regExStrStub + "/([^ $]+)" + "( |\\$)";
console.log("regExStr", regExStr);
console.log("regExStrWeight", regExStrWeight);
         regExWeight = new RegExp(regExStrWeight, "g");
         str = str.replace(regExWeight, '$1wrapper(intlimsweight(' + symbol + ')($2)($3)($4)($5)($6))$7');
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1wrapper(intlims(' + symbol + ')($2)($3)($4)($5))$6');

         // case of lower lim only, no () around lower limit (unless intended)
         regExStrStub = "(\\$| )" + symbolname + "\\_([^ ]+?) (.*?) d([a-z]+)";
         regExStr = regExStrStub + "( |\\$)";
         regExStrWeight = regExStrStub + "/([^ $]+)" + "( |\\$)";
         regExWeight = new RegExp(regExStrWeight, "g");
         str = str.replace(regExWeight, '$1wrapper(intllimweight(' + symbol + ')($2)($3)($4)($5))$6');
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1wrapper(intllim(' + symbol + ')($2)($3)($4))$5');

      }
    }
console.log("did we find integral?", str);

    return str
}

function preprocesslargeoperators(rawstring) {
    let str = rawstring;

// extract sum, prod, and other big tings with limits
    for (let [symbolname, symbol] of Object.entries(symbolswithlimits)) {
console.log("looking for limits operator: symbolname", symbolname);
      if(str.includes(symbolname)) {
         symbolname = "\\\\?" + symbolname;
// first check for limits in brackets
         var regExStr = "(\\$| )" + symbolname + "\\_[\\[\\(\\{]([^ ]+)[\\]\\)\\}]\\^[\\[\\(\\{]([^ ]+)[\\]\\)\\}]";
         var regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1opwrap(limsop(' + symbol + ')($2)($3))⚡');
// then only lower limit in brackets
         var regExStr = "(\\$| )" + symbolname + "\\_[\\[\\(\\{]([^ ]+)[\\]\\)\\}]\\^([^ ]+)";
         var regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1opwrap(limsop(' + symbol + ')($2)($3))⚡');
// now assume the limits are not in parentheses.  First check for lower and upper
         regExStr = "(\\$| )" + symbolname + "\\_([^ ]+)\\^([^ ]+)";
    // for now assume no spaces in the limits
console.log("regExStr", regExStr);
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1opwrap(limsop(' + symbol + ')($2)($3))⚡');
// now only lower, in brackets
         regExStr = "(\\$| )" + symbolname + "\\_[\\[\\(\\{]([^ ]+)[\\]\\)\\}]";
 // experiment       regExStr = "(\\$| )" + symbolname + "\\_[\\[\\(\\{]([^ ]+)[\\]\\)\\}] *([^ \\$]+)( |\\$)";
console.log("regExStr", regExStr);
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1opwrap(llimop(' + symbol + ')($2))⚡');
 // experiemnt        str = str.replace(regEx, '$1opwrap(llimop(' + symbol + ')($2)($3))$4');
// now only lower limit no brackets (when do we wrap all subscripts?)
         regExStr = "(\\$| )" + symbolname + "\\_([^ ]+)";
 //experiment        regExStr = "(\\$| )" + symbolname + "\\_([^ ]+) *([^ \\$]+)( |\\$)";
    // for now assume no spaces in the summand
console.log("regExStr for llimop", regExStr);
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1opwrap(llimop(' + symbol + ')($2))⚡');
  //experiment       str = str.replace(regEx, '$1opwrap(llimop(' + symbol + ')($2)($3))$4');
// no limits
         regExStr = "(\\$| )" + symbolname + "( |\\$)";
    // for now assume no spaces in the summand
 // idea: try only preprocessing the limits, and let the parsing code
 // handle the summand
console.log("regExStr", regExStr);
         regEx = new RegExp(regExStr, "g");
         str = str.replace(regEx, '$1opwrap(bigop(' + symbol + '))$2⚡');
      }
    }

    return str
}

function preprocessother(rawstring) {
    let str = rawstring;

    str = str.replace(/([^ \$\(\)\[\]\{\}]+):([^ ]+) to ([^ \$\(\)\[\]\{\}]+)/g,
               "fundef($1)($2)($3)");
    str = str.replace(/([^\$\|]+) cong(ruent)* ([^\$]+) mod ([^\$\{\}]+)/g,  // note: assumes an isolated equation
                                                   // or maybe a condition in set builder
               "congruentmod($1)($3)($4)");

    return str
}
