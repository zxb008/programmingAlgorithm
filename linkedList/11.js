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
// 利用归并排序，分而治之的思路
var merge = function(firstList,secondList){
    let res = {next:null};
    let lastRes = res;
    while (firstList && secondList) {
        if (firstList.val <= secondList.val) {
            lastRes.next = new ListNode(firstList.val);
            firstList = firstList.next;
        } else {
            lastRes.next = new ListNode(secondList.val);
            secondList = secondList.next;
        }
        lastRes = lastRes.next;
    }
    while(firstList){
        lastRes.next = new ListNode(firstList.val);
        firstList = firstList.next;
        lastRes = lastRes.next;
    }
    while(secondList){
        lastRes.next = new ListNode(secondList.val);
        secondList = secondList.next;
        lastRes = lastRes.next;
    }
    
    return res.next;
}
var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let lastList = slow.next
    slow.next = null;

    // 两条链表 head  lastList,
    // 下面这一步才是经典
    return merge(sortList(head),sortList(lastList))
};