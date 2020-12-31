// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL
// 示例 2:

// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/rotate-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function step(head) {
    let curr = head;
    if (!curr || !curr.next) {
        // 如果节点长度为 0 或 1 ，直接返回
        return curr;
    }
    while (curr.next.next) {
        curr = curr.next;
    }
    // 此时curr指向了链表的倒数第二个节点
    let lastNode = curr.next; // 最后一个节点lastNode
    curr.next = null;
    lastNode.next = head;
    return lastNode;
}
var rotateRight = function(head, k) {
    // 思考一个问题，如果k非常大呢？比如20000000，会造成超时
    // 所以需要先对k进行求余操作
    let count = 0;
    let curr = head
    while (curr) {
        count++
        curr = curr.next;
    }
    k = k >= count ? k%count:k
    while (k) {
        // 移动一步
        head = step(head);
        k--;
    }
    return head;
};