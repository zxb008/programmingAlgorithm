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
var reverseList = function(head) {
    let prev = null;
       let curr =head;
       let next;
       while (curr) {
           next = curr.next;
           curr.next = prev;
           prev = curr;
           curr = next;
       }
       return prev;
   };