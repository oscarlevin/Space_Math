/*
Input: the user input, conversiontarget of conversion: Latex, MathJax
Output: the corresponding Latex string of the user input
Description: the major abstract function which takes the user input and return the supposed output

2022.10.07 created
2022.10.25 refined to support MathJax
2022.10.26 add conversiontarget to support both cases
*/
function convert(str,conversiontarget) {
// why did we need that?   str = trimSpaces(str); //trim down all multiple spaces into one space

console.log("converting to target", conversiontarget);
  let str_no_xml = hide_xml(str);
  let str_separated = separatePieces(str_no_xml);

console.log("str_separated", str_separated);

  let convertedComponent = convertPieces(str_separated, conversiontarget);

console.log("firsttest", convertedComponent);
/*
console.log("test",convertMathSnippet("x^447","MathML"));
*/

  let answer_processed = assemble(str_separated, convertedComponent,conversiontarget);

console.log("answer_processed", answer_processed);
console.log("convertedComponent", convertedComponent);
console.log(" ");
console.log("*************************************************************");
console.log(" ");

  answer_processed = postprocess(answer_processed, conversiontarget);

  return answer_processed

/* ---------------- */

  str = preprocess(str);

/*
  str = str.replace(/(\$| |\(|\^)-([^ ])/g, '$1😑$2');  // negative sign
  str = str.replace(/([0-9])([a-zA-Z\(\[\{])/g, '$1 $2'); // implied multiplication number times letter or group
  str = str.replace(/\)\(/g, ') ('); // implied multiplication (.)(.)
  str = str.replace(/ \* /g, ' ⭐ '); // star/asterisk operator
  str = str.replace(/(\$| )\(([^,()]+)\, +([^,()]+)\)/, '$1($2) oointerval ($3)');  //open interval
  str = str.replace(/(\$| )gcd\( *([^,()]+)\, *([^,()]+) *\)/, '$1($2) gcd ($3)');  //open interval
  str = str.replace(/(\$| )\( ([^,()]+)\, *([^,()]+) \)/, '$1($2) gcd ($3)');  //open interval
  str = str.replace(/(\$| )\(([^ ][^,()]*)\,+([^ ][^,()]*)\)/, '$1($2) cartesianpoint ($3)');  //open interval
*/

// text in math is not parsed properly (see comment in M2Tree).
// temporary hack to remove spaces around quotes (note: this messes up quotes outside math)
// LATER:  took away this hack, because it messed up parsing.
// need to go back and figure out to not have implied multiplication of quoted strings
//  str = str.replace(/ +"/g, '"');
//  str = str.replace(/" +/g, '"');

  str = str.replaceAll('\\$', '%24%'); //replacement on all special characters, Using HTML UTF conversion here (see https://www.w3schools.com/tags/ref_urlencode.ASP)
console.log("input is now", str);
  if (conversiontarget == "LaTeX2MathJax"){
       str = convertLaTeX2MathJax(str,0);
  } else {
      str = convert2(str,0, conversiontarget); // use BNF grammar to split text and math, then combine them
  }
  
  str = str.replaceAll('%24%', '\\$'); //put the special characters back

console.log("   in convert, str: ", str);

  str = str.trim();

  if(conversiontarget == "Speech") {
      str = str.replace(/(^| |\n)\$([^$]+)\$( |\.|\,|:|;|\?|\!|\n|$)/g, "$1&nbsp;&nbsp;<em>$2</em>&nbsp;&nbsp;$3");
      str = str.replace(/(^| |\n)\$([^$]+)\$( |\.|\,|:|;|\?|\!|\n|$)/g, "$1&nbsp;&nbsp;<em>$2</em>&nbsp;&nbsp;$3");
      str = str.replace(/(^| |\n)\$([^$]+)\$( |\.|\,|:|;|\?|\!|\n|$)/g, "$1&nbsp;&nbsp;<em>$2</em>&nbsp;&nbsp;$3");
      str = str.replace(/\$\$(.+?)\$\$/sg, "\n<em>$1</em>\n");
      str = str.replace(/\\,/g, " ");
      str = str.replace(/∏/g, "product");
      str = str.replace(/∑/g, "sum");
  } else if(conversiontarget == "MathML") {
  //    str = str.replace(/(^| )\$([^$]+)\$( |$)/g, "\n<math>$2</math>\n");
      str = str.replace(/\$\$(.+?)\$\$/sg, "\n<math display=\"block\">$1</math>\n");
      str = str.replace(/(^| |\n)\$\$(.+?)\$\$( |\.|\,|:|;|\?|\!|\n|$)/g, "\n<math display=\"block\">$2</math>$3\n");
      str = str.replace(/(^| |\n)\$(.+?)\$( |\.|\,|:|;|\?|\!|\n|$)/g, "\n<math>$2</math>$3\n");
      str = str.replace(/\\,/g, "");
// We use "wrap" to add attributes to a child, but don't know if there is
// a single child.  When there is, transfer the attributes to the single child
// refactor to imporve and reconcile this with "simplifyAnswer" in conversion.js
      str = str.replace(/<wrap([^>]+)>(<m[a-z]+[^<>]*)(>[^<>]*<\/m[a-z]+>)<\/wrap>/g, "$2$1$3");
      str = str.replace(/<wrap /g, "<mrow ");
      str = str.replace(/<\/wrap>/g, "</mrow>");
/*
      str = str.replace(/\\,/g, "<mspace width=\"0.16em\"></mspace>");
*/
  }
console.log("str was", str);
  str = simplifyAnswer(str)
//  str = str.replace(/<mrow>/g, "\n<mrow>");
//  str = str.replace(/<\/mrow>/g, "</mrow>\n");
  str = str.replace(/\n+/g, "\n");
  str = str.replace(/␣/g, " ");
  return str
}

/*
Input: 
str: user input after spaces are trimmed
p: an integer indicating which deliminator should be check next

Output: the corresponding Latex string of the user input
Description: use BNF grammar to split user input into text and math part, call M2LConvert to transform the math part, then combine them and return the final string.

2022.10.07 created
            currently based on symmetry of deliminators
            rule1 : isolated deliminators will be ignored
            rule2 : deliminators with lower priority inside ones with higher priority will be ignored
2022.10.26 modified to support none-symmetry shape.
2022.10.28 modified to support case when user types one half of deliminator
*/
function convert2(str,p, conversiontarget) {
console.log("starting conversiontarget", conversiontarget, p, "on", str);
  let splitStr = [];
  let newStr = "";
  let deliminators = [["\\[","\\]"],["$$","$$"],["\\(","\\)"],["$","$"]]; //all tokens that will be seen as math mode, in priority (left to right)
  if (p >= deliminators.length){
    return str; // if we already checked all deliminators, just return the original string
  }
  let d = deliminators[p];

  let counter = 0;
  while (str.substring(counter,counter + d[0].length) != d[0] && str.length > counter + d[0].length){
      counter++;
  }
  if (str.substring(counter,counter + d[0].length) != d[0]){
      p += 1;
      return convert2(str,p,conversiontarget);
  } else {
      let right = findPositionOfRightPairConvert(str, counter, d[0],d[1]);
      if (right > 0){
          let convertedStr = str.substring(counter+d[0].length,right); // the part that need to be converted (math)
          for (let j = p; j < deliminators.length; j++){
            convertedStr = convertedStr.replaceAll(deliminators[j][0], ''); 
            convertedStr = convertedStr.replaceAll(deliminators[j][1], ''); // removed all lower priority deliminators
          }
          convertedStr = M2LConvert(convertedStr,d[0],d[1], conversiontarget);
          convertedStr = d[0] + convertedStr + d[1];
          convertedStr = convertedStr.replaceAll(d[0]+d[1],"");
console.log("convertedStr", convertedStr);
          return convert2(str.substring(0,counter),p+1, conversiontarget) + convertedStr + convert2(str.substring(right+d[1].length),p, conversiontarget);
      } else {
          p += 1;
          return convert2(str,p, conversiontarget);
      }
      
  }
}

function convertPieces(pieces, conversiontarget) {

  let converted_component = {};

  for (const piece of pieces) {
    const piece_type = piece[0];
    const contentkey = piece[3] + "," + conversiontarget;
    if (piece_type == "text") { converted_component[contentkey] = [piece[0], piece[1], piece[2]] }
        // in the future will will process text, like M\\"obius
    else if ( !(contentkey in converted_component)) {
      if (piece_type == "m" || piece_type == "md") {
          let thiscontentpiece = piece[2];
          thiscontentpiece = unhide_xml(thiscontentpiece);
          thiscontentpiece = preprocess(thiscontentpiece);
  //        converted_component[contentkey] = [piece[0], piece[1],convertMathSnippet(piece[2], conversiontarget)]
          converted_component[contentkey] = [piece[0], piece[1],convertMathSnippet(thiscontentpiece, conversiontarget)]
      } else {
        console.error("unknown piece_type", piece)
      }
    }
  }

//  const conversiontargets = ["MathML", "speech", "tex"];
//    for (const ctype of conversiontargets) {
//
//  // nothign yet, because we need 'convert' to not depend on the conversiontarget.
//
//    }

  return converted_component

}


// like convert2, except no delimiters because we have alread separated the math
function convertMathSnippet(str, conversiontarget) {
console.log("starting convertMathSnippet", conversiontarget, "on", str);
    let convertedStr = M2LConvert(str,"LBRACK","RBRACK", conversiontarget);
    convertedStr = simplifyAnswer(convertedStr);
    return convertedStr
}

/*
Input: 
str: a Latex string
p: an integer indicating which deliminator should be check next

Output: the corresponding MathJax output
Description: use BNF grammar to split user input into text and math part, call M2LConvert to transform the math part, then combine them and return the final string.

2022.10.07 created
            currently based on symmetry of deliminators
            rule1 : isolated deliminators will be ignored
            rule2 : deliminators with lower priority inside ones with higher priority will be ignored
*/
function convertLaTeX2MathJax(str,p) {
  let splitStr = [];
  let newStr = "";
  let deliminators = [["\\[","\\]"],["$$","$$"],["\\(","\\)"],["$","$"]]; //all tokens that will be replaced, in priority (left to right)
  let newdeliminators = [["\\[","\\]"],["\\[","\\]"],["\\(","\\)"],["\\(","\\)"]]; //all tokens that will be replaced, in priority (left to right)
  if (p >= deliminators.length){
    return str.replaceAll("\n","<br>"); // if we already checked all deliminators, just return the original string with lineswitch replacement
  }
  let d = deliminators[p];
  let nd = newdeliminators[p];

  let counter = 0;
  while (str.substring(counter,counter + d[0].length) != d[0] && str.length > counter + d[0].length){
      counter++;
  }
  if (str.substring(counter,counter + d[0].length) != d[0]){
      p += 1;
      return convertLaTeX2MathJax(str,p);
  } else {
      let right = findPositionOfRightPairConvert(str, counter, d[0],d[1]);
      if (right > 0){
          let innerStr = str.substring(counter+d[0].length,right); // the part that need to be converted (math)
          innerStr = nd[0] + innerStr + nd[1];
          return convertLaTeX2MathJax(str.substring(0,counter),p+1).replaceAll("\n","<br>") + innerStr.replaceAll("\\\\\n","\\\\").replaceAll("\n","\\\\") + convertLaTeX2MathJax(str.substring(right+d[1].length),p);
      } else {
          p += 1;
          return convertLaTeX2MathJax(str,p);
      }
      
  }
}

/*
Input: a string of user input
Output: the string with multiple spaces trimmed into one
Description: trim multiple spaces in a string into one.

2022.10.07 created
*/
function trimSpaces(str){
    return str.replace(/  +/g, ' ');
}

/*
cited:https://codereview.stackexchange.com/questions/179471/find-the-corresponding-closing-parenthesis
Description: given a string, a position of the left parenthese, the left and right parenthese, find the position of the paired up right parenthese.
2022.10.14 created, 
2022.10.26 support multi digit search, moved to convert
*/

function findPositionOfRightPairConvert(str, pos, lp, rp) {
  if (str.substring(pos,pos+lp.length) != lp) {
    throw new Error("No" + lp + " at index " + pos);
  }
  for (let i = pos + 1; i < str.length; i++) {
    switch (str.substring(i,i+rp.length)) {
    case rp:
      return i;
      break;
    }
  }
  return -1;    // No matching closing parenthesis
}
