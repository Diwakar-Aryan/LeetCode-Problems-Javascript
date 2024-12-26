/**
 *
 * Balanced Binary tree = Absolute(Height of left node - height of right node) > 1
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const Node = require("./Node");
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
  if (getHeight(root) === -1) return false;
  return true;
};

function getHeight(root) {
  if (root === null) return 0;

  lh = getHeight(root.left);
  if (lh === -1) return -1;
  rh = getHeight(root.right);
  if (lh === -1) return -1;

  if (Math.abs(lh - rh) > 1) return -1;

  return Math.max(lh, rh) + 1;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(6);
root.right.left.left = new Node(5);

console.log(isBalanced(root));
