/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {

    //HASHMAP => Extra space
    let map = {}
    while (head != null && !map[head]) {
        map[head] = true
        head = head.next;
    }
    return head;

    //TWO POINTERS
    // let slow = head;
    // let fast = head;

    // while (fast != null && fast.next != null) {
    //     fast = fast.next.next;
    //     slow = slow.next;

    //     if (fast == slow) {
    //         let slow2 = head;
    //         while (slow2 != slow) {
    //             slow = slow.next;
    //             slow2 = slow2.next;
    //              console.log(slow2.val, slow.val)
    //         }
    //         console.log(slow2.val, slow.val)
    //         return slow;
    //     }
    // }
    // return null;

};
// @lc code=end

