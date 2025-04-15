export class Tree{

    constructor(root){
        this.root = this.buildTree([...new Set(array)].sort((a,b) => a - b));
    }
    
    buildTree(arr){
        if (array.length === 0) return null;

        let mid = Math.floor(arr.length / 2);

        let root = new Node(arr[mid]);

        root.left = this.buildTree(array.slice(0, mid));
        root.right = this.buildTree(array.slice(mid + 1));

        return root;
    }

    prettyPrint(node){
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


}
