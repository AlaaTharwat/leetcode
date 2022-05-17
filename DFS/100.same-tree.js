/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
   
    if (p == null && q == null) {
		return true;
	}

	if ((p == null && q != null) || (q == null && p != null)) {
		return false;
	}
	if (p.val != q.val) {
		return false;
	}

	
	let good_lefts = isSameTree(p.left, q.left);
	let good_rights = isSameTree(p.right, q.right);

	// So are both sides good?
	return good_lefts && good_rights;
};
// @lc code=end

