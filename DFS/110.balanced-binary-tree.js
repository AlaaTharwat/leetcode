/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (CheckLength(root) == -1) return false;
    return true;
};

const CheckLength = (root) => {
    if (root == null) return 0;
    let left = CheckLength(root.left);
    if(left == -1 ) return -1

    let right = CheckLength(root.right);
    if (right == -1) return -1;

    let diff = Math.abs(left - right);
        
    if (diff > 1) return -1;
    return 1 + Math.max(left, right);
}
// @lc code=end

