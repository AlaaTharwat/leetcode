/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let string = '';
    
    function buildString(node) {
         if (!node) {
          string += 'e ';
        } else {
          string += node.val + ' ';
          buildString(node.left);
          buildString(node.right);
        }
    }
  
  buildString(root)
  return string
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let nodes = data.split(' ');
    function buildTree() {
        let val = nodes.shift();
         if (val === 'e') return null
        else{
            let node = new TreeNode(val);
            node.left = buildTree();
            node.right = buildTree();
            return node;
        }
    }
    
    return buildTree()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

