/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 == null)
        return list2;
    if (list2 == null)
        return list1;

    var tmp1 = list1.next;
    var tmp2 = list2.next;

    if (list2.val > list1.val){
        list1.next = mergeTwoLists(tmp1, list2);               
        return list1; 
    }
    list2.next = mergeTwoLists(list1, tmp2);           
    return list2;        
};
// @lc code=end

