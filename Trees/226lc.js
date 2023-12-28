/*
226. Invert Binary Tree
Given the root of a binary tree, invert the tree, and return its root.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if(root == null) return null
  left = root.left;
  right = root.right;
  root.left = invertTree(right);
  root.right = invertTree(left);
  return root
};
