// 面试题 02.05. 链表求和
// 给定两个用链表表示的整数，每个节点包含一个数位。

// 这些数位是反向存放的，也就是个位排在链表首部。

// 编写函数对这两个整数求和，并用链表形式返回结果。



// 示例：

// 输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
// 输出：2 -> 1 -> 9，即912
// 进阶：思考一下，假设这些数位是正向存放的，又该如何解决呢?

// 示例：

// 输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
// 输出：9 -> 1 -> 2，即912

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var dealLang = function (head, sum) {
    if (sum < 10) {
        head.val = sum;
    }else{
        head.val = sum % 10;
        if (head.next) {
            dealLang(head.next, head.next.val + 1)
        }else{
            head.next = new ListNode(1);
        }
    }
}
var addTwoNumbers = function (l1, l2) {
    let n1 = l1, count1 = 0, n2 = l2, count2 = 0;
    while (n1) {
        count1++;
        n1 = n1.next;
    }
    while (n2) {
        count2++;
        n2 = n2.next;
    }
    let lang = null, short = null;
    if (count1 >= count2) {
        lang = l1;
        short = l2;
    } else {
        lang = l2;
        short = l1
    }
    let nodeLang = lang, nodeShort = short, sum = 0;
    while (nodeLang && nodeShort) {
        sum = nodeLang.val + nodeShort.val;
        if (sum < 10) {
            nodeLang.val = sum
        } else {
            dealLang(nodeLang, sum)
        }
        nodeLang = nodeLang.next;
        nodeShort = nodeShort.next;
    }
    return res;
};