/*
Input: a translated tree
Output: corresponding Latex
Description: A function to call combine method in tree root to get the latex string

2022.10.12 created, only works for simple equation with operators at this stage.
*/
function combineTree2Latex(tree,params){
console.log("combineTree2Latex", tree, "params", params, "with output", tree.root.outputvalue);
	tree.root.combine(params);
console.log("AGAIN combineTree2Latex", tree, "params", params,"with output", tree.root.outputvalue);
//	let latexString = tree.root.value;
	let latexString = tree.root.outputvalue;
	//while (latexString.includes("#end?")){
	//	latexString = latexString.replace(/#end\?\[(((?!#)\S)*)\&(((?!#)\S)*)\](.+?)/, "$3$5");
	//	latexString = latexString.replace(/#end\?\[(((?!#)\S)*)\&(((?!#)\S)*)\]$/, "$1");
	//}
	return latexString;
}
