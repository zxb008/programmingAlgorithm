// 24. 两两交换链表中的节点
// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 
// 示例 1：
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]

// 示例 2：
// 输入：head = []
// 输出：[]

// 示例 3：
// 输入：head = [1]
// 输出：[1]
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
// 思路：此题可采用递归方法，递归需要考虑三要素，返回值（交换完成的子链表），调用单元做了什么？（交换节点），终止条件（head为null或next为null）
//  head => next => 子链表
var swapPairs = function(head) {
    if (!head || !head.next ) {
        return head;
    }
    let next = head.next; // 先保存下一个节点next
    head.next = swapPairs(next.next); //当前节点连接一个已经交换完成的子链
    next.next = head;
    return next;
};