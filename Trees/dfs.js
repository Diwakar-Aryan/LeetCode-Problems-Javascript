class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function dfsPreOrder(node) {
  const result = [];
  function recursiveTraverse(currentNode) {
    if (node === null) return;

    result.push(currentNode.value);

    if (currentNode.left) {
      recursiveTraverse(currentNode.left);
    }

    if (currentNode.right) {
      recursiveTraverse(currentNode.right);
    }
  }
  recursiveTraverse(node);
  return result;
}

function dfsInOrder(node) {
  const result = [];
  function recursiveTraverse(currentNode) {
    if (node === null) return;

    if (currentNode.left) {
      recursiveTraverse(currentNode.left);
    }

    result.push(currentNode.value);

    if (currentNode.right) {
      recursiveTraverse(currentNode.right);
    }
  }
  recursiveTraverse(node);
  return result;
}

function dfsPostOrder(node) {
  const result = [];
  function recursiveTraverse(currentNode) {
    if (node === null) return;

    if (currentNode.left) {
      recursiveTraverse(currentNode.left);
    }

    if (currentNode.right) {
      recursiveTraverse(currentNode.right);
    }
    result.push(currentNode.value);
  }
  recursiveTraverse(node);
  return result;
}

const root = new Node(30);
root.left = new Node(20);
root.right = new Node(50);
root.left.left = new Node(15);
root.left.right = new Node(25);
root.right.left = new Node(45);
root.right.right = new Node(75);

console.log("Pre", dfsPreOrder(root));
console.log("In", dfsInOrder(root));
console.log("Post", dfsPostOrder(root));
