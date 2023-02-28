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

function negativeItem(conversiontype) {
    if(conversiontype == "SpaceMath2MathML") {
        return "<mo>&#x2212;</mo>"
    } else if(conversiontype == "SpaceMath2speech") {
        return " negative "
    } else {
        return "-"
    }
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
  if(str.startsWith("-")) {
     return negativeItem(conversiontype) + markAtomicItem(str.substring(1), conversiontype)
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
        ans = "quantity " + ans + " endquantity"
    }
  } else {
    ans = "{" + ans + "}"
  }
  return ans
}
