/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root === null) {
        return [];
    }
    let res = [];
    let queue = []; // temporarily store the next nodes to visit
    let levelIdx = 0;
    queue.push(root);
    while (queue.length > 0) {
        let len = queue.length; // represents the number of nodes in current level
        let nodeVals = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            nodeVals.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        if (levelIdx % 2 === 1) {
           // console.log(nodeVals)
            nodeVals.reverse();
         //   console.log(nodeVals)
        }
        res.push(nodeVals);
        levelIdx++;

    }

    return res
};

// @lc code=end

