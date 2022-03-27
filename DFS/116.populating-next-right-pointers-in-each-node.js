/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116]    
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
//DFS
var connect = function(root) {
    let q = [root], ans = []
    while (q[0]) {
        let qlen = q.length;
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
           
            if (i !== qlen-1){
                //  console.log(curr)
                 curr.next = q[0];  //next is new pointer
            } 
            if(curr.left) q.push(curr.left)
            if(curr.right) q.push(curr.right)
        }
               
    }
            
     return root
};

//DFS
var connect2 = function(root) {
    setPointer(root);
    function setPointer(root) {
        if (!root || !root.left || !root.right) return;
        let left = root.left;
        let right = root.right;
        left.next = right;
        if (root.next) right.next = root.next.left;
        setPointer(root.left);
        setPointer(root.right);
    }
    return root;
};
// @lc code=end

