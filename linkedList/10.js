// 143. 重排链表
// 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
// 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 示例 1:

// 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
// 示例 2:

// 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var flip = function (head) {
    let prev = null;
    let curr = head;
    let next;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    // 注意这里返回的是prev
    return prev;
}
// var merge = function(firstList,secondList){
//     let res = {next:null};
//     let lastRes = res;
//     while (firstList || secondList) {
//         if (firstList) {
//             lastRes.next = new ListNode(firstList.val);
//             firstList = firstList.next;
//         }
//         lastRes = lastRes.next;
//         if (secondList) {
//             lastRes.next = new ListNode(secondList.val);
//             secondList = secondList.next;
//         }
//         lastRes = lastRes.next;
//     }
//     return res.next;
// }
// 思路:使用快慢指针将链表分割成两个链表，然后将两个链表交替连接
var reorderList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    };
    // 此时，链表的长度为偶数：solw指向中偏左的节点，链表的长度为奇数：solw指向中心点
    let secondList = slow.next;
    secondList = flip(secondList);// 链表的翻转

    slow.next = null;
    let firstList = head;
    // 将两条链表合并,注意题目要求，要在原链表上面操作，不要返回任何东西（所以不可定义一个新变量之类的）
    // let res = merge(firstList,secondList);
    while (firstList || secondList) {
        // 由上面可知 firstList 的长度 >= secondList 的长度
        if (secondList) {
            let next = firstList.next;
            firstList.next = new ListNode(secondList.val);
            firstList = firstList.next;
            firstList.next = next;
            secondList = secondList.next;
        }
        firstList = firstList.next;
    }
};