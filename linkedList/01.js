// 19. 删除链表的倒数第N个节点
// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：

// 给定的 n 保证是有效的。

// 进阶：

// 你能尝试使用一趟扫描实现吗？
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
    // 链表反转
    let prev = null;
    let curr = head;
    console.log('反转之前',curr);
    while(curr != null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    console.log('反转之后',curr);
};
let head = {
    val:1,
    next:null
}
let head1 = {
    val:2,
    next:null
}
let head2 = {
    val:3,
    next:null
}
let head3 = {
    val:4,
    next:null
}
let head4 = {
    val:5,
    next:null
}
head.next = head1
head1.next = head2
head2.next = head3
head3.next = head4
removeNthFromEnd(head,0)