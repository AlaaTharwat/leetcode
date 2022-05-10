/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if(root.length === 1) return root.val;
    var queue = [root];
    var result;
    while(queue.length) {
        var currentLevelLen = queue.length;
        console.log(currentLevelLen)
        var node;
        for(var i = 0; i < currentLevelLen; i++) {
            node = queue.shift();
            if(i === 0) result = node.val
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
};
// @lc code=end

