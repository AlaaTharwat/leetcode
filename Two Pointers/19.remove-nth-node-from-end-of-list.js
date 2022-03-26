/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let t1 = head, t2 = head;
    for (let i = 0; i < n; i++) {
        t1 = t1.next
    }

    console.log("t11", t1)
    if (t1 == null) {
        return head.next
    }

    while (t1.next != null) {
        t1 = t1.next
        console.log("t12", t1)
        t2 = t2.next
        console.log("t22", t2)
    }
    t2.next = t2.next.next
    console.log(t2)
    return head
};
// @lc code=end

