const Node = require("./Node")


function invertTree (root) {

    if(!root) return null

    const tempNode = root.left
    root.left = root.right
    root.right = tempNode

    invertTree(root.left)
    invertTree(root.right)

    return root

}

function printTree(root) {
    
    if(!root) return

    console.log(root.value);
    printTree(root.left)
    printTree(root.right)
}

const root = new Node(4)
root.left = new Node(7);
root.right = new Node(3);
root.left.left = new Node(6);
root.left.right = new Node(9);
root.right.left = new Node(1);
root.right.right = new Node(2);

const inverted = invertTree(root)

printTree(inverted)
