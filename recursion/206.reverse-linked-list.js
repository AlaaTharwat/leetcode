/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function(head, pre = null) {
    if(!head) return pre;

    const next = head.next;
    head.next = pre;
    return reverseList(next, head)

    // let curr = head; //cursor to the current node
    // let prev = null; //cursor to the previous node
  
    // while (curr) { //curr !== null
    //   let tmp = curr.next; //move cursor to the next node
  
    //   curr.next = prev; //1.change curr pointer backwards
    //   prev = curr; //2.change prev cursor to current
    //   curr = tmp; //3.move cur cursor to the next node
    //   console.log("prev",prev)
    //   console.log("curr",curr)

    // }
    // return prev; //return a new head of the list
};
// @lc code=end

