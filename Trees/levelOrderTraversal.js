const Node = require('./Node')

function levelOrderTraversal(root) {

    if(!root) return []

    const queue = []
    const output = []

    queue.push(root)

    while(queue.length) {
        const len = queue.length
        const row = []

        for(let i =0; i< len; i++) {
            const curr = queue.shift();
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
            row.push(curr.value)
        }

        output.push(row)

    }

    return output
}


const root = new Node(10)
root.left = new Node(20);
root.right = new Node(50);
root.left.left = new Node(15);
root.left.right = new Node(25);
root.right.left = new Node(45);
root.right.right = new Node(75);


console.log(levelOrderTraversal(root));