/*
The js file for the test interface.

2022.09.27 created

2022.10.17 add global call
2022.10.25 add MathJax support
*/

"use strict";
let sourceTextArea = document.getElementById("sourceTextArea");
let echosourceTextArea = document.getElementById("echosourceTextArea");
let mathmlTextArea = document.getElementById("mathmlTextArea");
let pretextTextArea = document.getElementById("pretextTextArea");
let speechTextArea = document.getElementById("speechTextArea");
let mathJaxArea = document.getElementById("MathJaxArea");

let translateTable = new TranslateTable();

///*
var dictionary;    
fetch("dictionary.json").then(
        function(u){ return u.json();}
      ).then(
        function(json){
          dictionary = json;
        }
      )
      //*/

var theSpaceMathInML;

if (sourceTextArea.addEventListener) {
  sourceTextArea.addEventListener('input', function() {
/*
      echosourceTextArea.value = convert(sourceTextArea.value,"SpaceMath2LaTeX");
*/
      theSpaceMathInML = convert(sourceTextArea.value,"SpaceMath2MathML");
/*
      mathmlTextArea.value = convert(sourceTextArea.value,"SpaceMath2MathML");
*/
      mathmlTextArea.value = theSpaceMathInML;
      mathmlDisplayArea.innerHTML = theSpaceMathInML;
/*
      mathmlDisplayArea.innerHTML = convert(sourceTextArea.value,"SpaceMath2MathML");
*/
      speechTextArea.innerHTML = '" ' + convert(sourceTextArea.value,"SpaceMath2speech") + ' "';
/*
      mathJaxArea.innerHTML = convert(echosourceTextArea.value,"LaTeX2MathJax");
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"MathJaxArea"]);
*/
  }, false);
} else if (sourceTextArea.attachEvent) {
/* is this part ever used? */
  error
  sourceTextArea.attachEvent('onpropertychange', function() {
      echosourceTextArea.value = convert(sourceTextArea.value,"SpaceMath2LaTeX");
      mathmlTextArea.value = convert(sourceTextArea.value,"SpaceMath2LaTeX");
      speechTextArea.value = '"' + convert(sourceTextArea.value,"SpaceMath2LaTeX") + '"';
      pretextTextArea.value = convert(sourceTextArea.value,"SpaceMath2LaTeX");
      mathJaxArea.innerHTML = convert(echosourceTextArea.value,"LaTeX2MathJax");
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"MathJaxArea"]);
  });
}
