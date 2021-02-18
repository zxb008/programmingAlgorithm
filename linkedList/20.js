// 19. 删除链表的倒数第 N 个结点
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 进阶：你能尝试使用一趟扫描实现吗？

 

// 示例 1：


// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：

// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：

// 输入：head = [1,2], n = 1
// 输出：[1]
 

// 提示：

// 链表中结点的数目为 sz
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
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
// 1. 递归  2. 快慢指针
// 要说快慢指针解法，其实某种程度上也算是遍历了两次。实际上就相当于先算出长度解法的两遍是一起走的。那么想要真正的只遍历一次就需要一些野路子了。
// 于是我们想到了递归。注意到，可以利用递归的回溯，来得知当前节点之后有多少个节点。当后面的节点数为n的时候，我们就找到了需要删除节点的位置，此时删除当前节点的下一个节点即可。


// 递归的关键之处在于如何得知当前节点之后还有多少个节点

var currLength = function(node,n){
    if (!node) {
        return 0;
    }
    const pos = currLength(node.next,n)+1;
    if (pos == n + 1) {
        node.next = node.next.next;
    }
    return pos;
}
var removeNthFromEnd = function(head, n) {
    const pos = currLength(head, n);
    // 说明删除的是头节点
    if (pos == n)
        return head.next;
    return head;
};