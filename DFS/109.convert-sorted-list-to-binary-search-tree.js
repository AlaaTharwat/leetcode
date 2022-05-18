var sortedListToBST = function(head) {
    if (!head) { return null; }
   
    return DFS(head, null);
}; 

const DFS = (head, tail) => {
   if (head === tail) { return null; }
   
   let slow = head;
   let fast = head;
  //get mid of linkedList!!!
   while (fast !== tail && fast.next !== tail) {
       fast = fast.next.next;
       slow = slow.next;
   }
   
   let root = new TreeNode(slow.val);
   root.left = DFS(head, slow);
   root.right = DFS(slow.next, tail);
   
   return root
}