/*
 * @lc app=leetcode id=968 lang=javascript
 *
 * [968] Binary Tree Cameras
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

const [NOT_NEEDE, NO_CAMERA, HAS_CAMERA] = [-1, 0, 1];
var minCameraCover = function (root) {
  let ans = 0;
  let isRootCovered = dfs(root);
  if (isRootCovered == NO_CAMERA) return ans++;
  return ans;

  function dfs(node) {
    if (!node) return NOT_NEEDE;

    let left = dfs(node.left);
    let right = dfs(node.right);

    if (left == NO_CAMERA || right == NO_CAMERA) {
      ans++;
      return HAS_CAMERA;
    } else if (left == HAS_CAMERA || right == HAS_CAMERA) {
      return NOT_NEEDE;
    } else {
      return NO_CAMERA;
    }
  }
};

// @lc code=end
