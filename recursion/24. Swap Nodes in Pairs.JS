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
 var swapPairs = function(head) {
    let dummyList = new ListNode(null, head);
function swapNodes(listNode) {
    // Check if a swap can take place (if 2 nodes exist after the current one)
    if (listNode && listNode.next && listNode.next.next) {
        // Obtain the nodes to be swapped
        const first = listNode.next;
        const second = listNode.next.next;

        // Swap the nodes
        first.next = second.next;
        second.next = first;
        
        console.log("1", listNode)
        
        listNode.next = second;
        
        console.log(listNode)
        // Move past the 2 swapped nodes, and call the function again
        swapNodes(listNode.next.next);
    }
}

swapNodes(dummyList);

return dummyList.next;
};