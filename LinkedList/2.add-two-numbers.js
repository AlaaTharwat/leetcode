/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let sum = 0
    let prev = new ListNode()
    let prehead = prev //save pointer of first element in linked list

   // console.log("1" , prev, prehead)
    
    while (l1 || l2) {
        if (l1) {
            sum = sum + l1.val
            l1 = l1.next
        }
        if (l2) {
            sum = sum + l2.val
            l2 = l2.next
        }
        
        prev.next = new ListNode(sum % 10)
        prev = prev.next
        sum = sum > 9 ? 1 : 0
    }
    if (sum) {
        prev.next = new ListNode(sum % 10)
    }
    // console.log("2" , prev, prehead)
    return prehead.next
};
// @lc code=end

