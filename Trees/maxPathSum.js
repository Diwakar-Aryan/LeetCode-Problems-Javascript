const Node = require('./Node')

function maxPathSum(root, maximum) {
    if(root === null) {
        return 0
    }
    
    let leftSum = Math.max(0, maxPathSum(root.left,maximum))
    let rightSum = Math.max(0, maxPathSum(root.right,maximum))

    maximum = Math.max(leftSum+rightSum+root.value, maximum)
    return root.value + Math.max(leftSum,rightSum)
}

const root = new Node(1)
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(6);
root.left.right = new Node(7);
root.right.left = new Node(8);
root.right.right = new Node(9);

console.log(maxPathSum(root, 0))