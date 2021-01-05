// 86. 分隔链表
// 给你一个链表和一个特定值 x ，请你对链表进行分隔，使得所有小于 x 的节点都出现在大于或等于 x 的节点之前。

// 你应当保留两个分区中每个节点的初始相对位置。

 

// 示例：

// 输入：head = 1->4->3->2->5->2, x = 3
// 输出：1->2->2->4->3->5
// 思路：运用双链表法，遍历原链表，然后将两条计算后的链表进行拼接
var partition = function(head, x) {
    let res1 = {next:null};
    let lastRes1 = res1;
    let res2 = {next:null};
    let lastRes2 = res2;
    let curr = head;
    while (curr) {
        let node = new ListNode(curr.val)
        if ( x > node.val) {
            // 思考：为啥不可以直接 lastRes1.next = curr; ？ 因为 curr后面还连接着其他的节点，等到下一次循环的时候 lastRes1的指向就会往后移，并且指向的一直是原链表head，从而导致出现问题
            lastRes1.next = node;
            lastRes1 = lastRes1.next;
        } else {
            lastRes2.next = node;
            lastRes2 = lastRes2.next;
        }
        curr = curr.next;
    }
    // 注意下面这种写法，很有意思
    lastRes1.next = res2.next;
    return res1.next;

};