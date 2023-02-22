

/*
Description: the tree structure 

cited from https://www.30secondsofcode.org/articles/s/js-data-structures-tree

2022.10.07 created.

2022.10.12 adjusted to fit M2Tree, create combine
2022.10.14 replaced id into position
2022.10.17 improve combine rule
2022.10.24 improve parentheses treatment, add take off parenthese functionality
2022.10.25 add property of noPriority to cover case that no-space and spaced operators are mixed (like 1 / 3+3 - 3)
2022.11.14 improve detail in left sup/subscripts
*/

/*
Symbol notations:
#a children a
@#a children a, surrounded by {} if length > 1
#{} may or may not a {} for ^^ and __, depending on their positions
#&\\text \text, but may have extra spaces in the cases environment
#2@1 first character of 2nd argument
#2@-1 everything except the first character of 2nd argument
*/
class TreeNode {
/*
  constructor(position, value, key = null, parent = null, conversiontype) {
*/
  constructor(position, value, key=null, parent=null, conversiontype="unknown") {
    this.position = position; // position of its brothers, 0 if is root
    this.value = value;
    this.key = key;
    this.parent = parent;
    this.conversiontype = conversiontype;
    this.children = [];
    this.pair = [];
    this.noPriority = false;
    this.exPriority = false;
console.log("in TreeNode, this.conversiontype", this.conversiontype);
if(true || this.conversiontype === undefined) {
   console.log("making a TreeNode", this.position, "a", this.value = value, "b", this.key = key, "c", this.parent,"d",this.conversiontype);
}
  }

  insert(value, key = value) {
  console.log("TreNode 1 ", this);
    this.children.push(new TreeNode(this.children.length,value, key, this, this.conversiontype));
  console.log("TreNode 1 again ", this);
    return true;
  }

  insertNode(node) {
console.log("TreNode 2 ", node,"   ", this);

    node.parent = this;
    node.position = this.children.length;
    this.children.push(node);
console.log("TreNode 2 again", node,"   ", this);

    return true;
  }

  addLeafMarkup() {
      if(this.key == null) {
          this.value = markAtomicItem(this.value, this.conversiontype);
      } else if(this.key == " ") {
          if(this.position == 1) {
            if(this.conversiontype == "SpaceMath2MathML") {
//              this.value = "<mo>&InvisibleTimes;</mo>"
            }
          } else {
               this.value = markAtomicItem(this.value, this.conversiontype);
          }
      } else if(this.key == "" || this.key == " ") {
          console.log("item with null or empty key.  Is this a function apply?", this)
      } else if(dictionary[this.key]["type"] == "operator") {
          if(this.value != this.key) {this.value = "<mi>"+this.value+"</mi>"}
      }
  }

  combine(params){
  console.log("TreNode 3 conversiontype", params, "gg", this);
      for (let i of this.children){
          if (!i){
              continue;
          }
          i.combine(params);
      }

      //if (this.parent && isOperatorPure(this.key) && this.parent.pair.length == 1){
      //    this.parent.securePair = true; //if contains operator, the parent should not take off the only parenthese
      //}

      if (this.isLeaf){
 if(this.parent) {
 console.log("isLeaf", this.isLeaf, "siblings", this.parent.children, "parent.key", parent.key, "all", this);
 } else { console.log("isLeaf wotj no parent", this);
 }
          if (this.value.length > 1){
              this.value = this.value.trim();
          }
          this.addLeafMarkup()
      } else {

 console.log("not a Leaf", this.pair, this);
          let key = this.children[0].key;
          let newValue;
          let numberOfSiblings = this.children.length;
          let position = 0;
          while (this.children[position].value != key){
              position++;
          }

          //hard coded rule for specific cases
          if ((key == " " || key == "")){
              if (this.children.length > 1 && this.children[1].value == key){
                if (key == " "){
                  key = "\\,";
                }
                newValue = this.children[0].value + key + this.children[2].value;
              } else {
                newValue = this.children[1].value;
              }
          } else {
console.log("about to use conversiontype", this.conversiontype);
              try {
                if(this.conversiontype == "SpaceMath2MathML") {
console.log("               trying to extract using key", key, "from", this);
                  newValue = dictionary[key].ruleML[(position+1)+","+(numberOfSiblings)];
console.log("               attempted       SpaceMath2MathML conversion: ", newValue);
                } else if(this.conversiontype == "SpaceMath2spoken") {
                  newValue = dictionary[key].speech[(position+1)+","+(numberOfSiblings)];
                } else {
                  newValue = dictionary[key].rule[(position+1)+","+(numberOfSiblings)];
                }
              } catch(error) {
                newValue = dictionary[key].rule[(position+1)+","+(numberOfSiblings)];
console.log("                      SpaceMath2MathML conversion failed on", newValue);
              }
              if (newValue.includes("#comma?")){
                  if (this.key && dictionary[this.key].type == "operator" && dictionary[this.key].priority < 0){ // comma group
                      newValue = newValue.replace(/#comma\?\[(\S*)\&(\S*)\]$/, "$1");
                  } else {
                      newValue = newValue.replace(/#comma\?\[(\S*)\&(\S*)\]$/, "$2");
                  }
              }
              if (newValue.includes("#{}")){ // the rules used by super & subscripts
                  let isLeftMost = true;
                  let tempNode = this;
                  if (["^^","__"].includes(tempNode.key)){
                      isLeftMost = false;
                  }
                  while (tempNode.parent && isScriptPure(tempNode.key)){
                      tempNode = tempNode.parent;
                      if (["^^","__"].includes(tempNode.key)){
                          isLeftMost = false;
                      }
                  }
                  if (!isLeftMost){
                      newValue = newValue.replace("#{}", "");
                  } else {
                      newValue = newValue.replace("#{}", "{}");
                  }
              }
              for (let i = 0; i < this.children.length; i++){
                  let childValue = this.children[i].value;
                  let childValueBracket = childValue;
                  if (newValue.includes("#@"+(i+1))){ // the rules used by super & subscripts
                      if (childValueBracket.length > 1 ){
                          childValueBracket = "{"+childValueBracket+"}"
                      }
                      newValue = newValue.replace("#@"+(i+1), childValueBracket);
                  }
                  if (params.includes("caseEnvironment")){
                      newValue = newValue.replace("#&","&");
                  } else {
                      newValue = newValue.replace("#&\\text{","\\text{ ");
                      newValue = newValue.replace("#&","");
               }
                  newValue = newValue.replace("#"+(i+1)+"@1", childValue[0]);
                  newValue = newValue.replace("#"+(i+1)+"@-1", childValue.substring(1));
                  newValue = newValue.replace("#"+(i+1), childValue);
              }
          }

          this.value = newValue;
          this.children = [];
      }

      // Find if the current key may take off a layer of parenthese.
      if (this.parent && dictionary[this.key] && dictionary[this.key].offpair){
          let numberOfSiblings = this.parent.children.length;
          let position = 0;
          while (this.parent.children[position].value != this.key){
              position++;
          }
          if (dictionary[this.key].offpair[(position+1)+","+(numberOfSiblings)] && dictionary[this.key].offpair[(position+1)+","+(numberOfSiblings)].includes(this.position+1)){
            this.pair.pop();
          }
      }

      if (this.pair && this.pair.length > 0){
            for (let p of this.pair){
                if (p[0] == "{"){
                    p[0] = ["\\{"];
                }
                if (p[1] == "}"){
                    p[1] = ["\\}"];
                }
                this.value = p[0] + this.value + p[1];
            }
            this.pair = [];
      }
  }

  get isLeaf() {
    return this.children.length === 0;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}

class Tree {
  constructor(id,value, key, conversiontype) {
    this.root = new TreeNode(id, value, key, null, conversiontype);
  console.log("       Tree 0 conversiontype", conversiontype);
  }

  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  *postOrderTraversal(node = this.root) {
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.postOrderTraversal(child);
      }
    }
    yield node;
  }

  insert(parentNodevalue, value, key = value) {
  console.log("       Tree 1 conversiontype", this.conversiontype);

    for (let node of this.preOrderTraversal()) {
console.log("trying Tree1 node", node);
      if (node.value === parentNodevalue) {
        node.children.push(new TreeNode(value, key, node, conversiontype));
/*
oooooo
        node.children.push(new TreeNode(0,value, key, node, conversiontype));
*/
        return true;
      }
    }
    return false;
  }

  remove(value) {
    for (let node of this.preOrderTraversal()) {
      const filtered = node.children.filter(c => c.value !== value);
      if (filtered.length !== node.children.length) {
        node.children = filtered;
        return true;
      }
    }
    return false;
  }

  find(value) {
    for (let node of this.preOrderTraversal()) {
      if (node.value === value) return node;
    }
    return undefined;
  }
}
