/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
var minDepth = function(root) {
    if (!root) return [];
    let res = 1, q = [root];
    while (q.length > 0) {
        let len = q.length
        for(let i = 0 ; i < len; i++){
            let node = q.shift();
            if(!node.left && !node.right) return res
            if(node.left) q.push(node.left);
            if(node && node.right) q.push(node.right);
        }
        res++;

    }

    return res
};
// @lc code=end

