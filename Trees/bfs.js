/*
i) Initiate a queue with root in it
ii) Remove the first item out of queue
iii) Push the left and right children of popped item into the queue
iv) Repeat steps 2 and 3 until the queue is empty
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function bfs(node) {
  const queue = [];
  const result = [];
  queue.push(node);

  while (queue.length > 0) {
    const tempNode = queue.shift();
    result.push(tempNode.value);

    if (tempNode.left) {
      queue.push(tempNode.left);
    }
    if (tempNode.right) {
      queue.push(tempNode.right);
    }
  }
  return result;
}
const root = new Node(30);
root.left = new Node(20);
root.right = new Node(50);
root.left.left = new Node(15);
root.left.right = new Node(25);
root.right.left = new Node(45);
root.right.right = new Node(75);

console.log(bfs(root));
// console.log(root);
