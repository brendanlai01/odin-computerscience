export class Tree{

    constructor(root){
        this.root = root;
    }



}


function removeDupes(array){
    return array.filter((value, index) => array.indexOf(value) === index);
}

function sortAsc(array){
    return array.sort(function(a, b){return a-b});
}

function prettyPrint(node){
    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
}