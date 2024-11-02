const Node = require('./Node')

function preOrder (root) {
    if(root === null) return
    
    console.log(root.value);
    preOrder(root.left)
    preOrder(root.right)
}

function postOrder (root) {
    if(root === null) return
    
    preOrder(root.left)
    preOrder(root.right)
    console.log(root.value);
}

function inOrder (root) {
    if(root === null) return
    
    preOrder(root.left)
    console.log(root.value);
    preOrder(root.right)
}

const root = new Node(10)
root.left = new Node(20);
root.right = new Node(50);
root.left.left = new Node(15);
root.left.right = new Node(25);
root.right.left = new Node(45);
root.right.right = new Node(75);

console.log(`PRE ORDER TRAVERSAL`);
preOrder(root);

console.log(`POST ORDER TRAVERSAL`);
postOrder(root);

console.log(`IN ORDER TRAVERSAL`);
inOrder(root);