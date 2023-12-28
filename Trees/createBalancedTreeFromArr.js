class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * By the passed sorted array
 * a balanced binary search tree is created
 */
function createTree(arr) {
  return createBalancedTree([...arr].sort(), 0, arr.length - 1);
}

/**
 * Recursively creates nodes for each "half" of the array:
 * the left and right parts are turned into the corresponding subtrees
 */
function createBalancedTree(arr, start, end) {
  if (end < start) return null;

  const mid = Math.floor(end + start / 2);
  const node = new Node(arr[mid]);

  node.left = createBalancedTree(arr, start, mid - 1);
  node.right = createBalancedTree(arr, mid + 1, end);

  return node;
}

const arr = [45, 20, 75, 25, 30, 50, 15];
console.log(createTree(arr));
