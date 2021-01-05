// 138. 复制带随机指针的链表
// 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。

// 要求返回这个链表的 深拷贝。 

// 我们用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：

// val：一个表示 Node.val 的整数。
// random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。

// 示例 1：
// 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]

// 示例 2：
// 输入：head = [[1,1],[2,1]]
// 输出：[[1,1],[2,1]]

// 示例 3：
// 输入：head = [[3,null],[3,0],[3,null]]
// 输出：[[3,null],[3,0],[3,null]]

// 示例 4：
// 输入：head = []
// 输出：[]
// 解释：给定的链表为空（空指针），因此返回 null。


// 提示：
// -10000 <= Node.val <= 10000
// Node.random 为空（null）或指向链表中的节点。
// 节点数目不超过 1000 。

// 1. 利用map
// 2. 快慢指针
var hasCycle = function (head) {
    // 1. map方式
    // const map = new Map();
    // while (head) {
    //     // 由于对象只接受字符串作为键名,所以这里利用map
    //     // map结构，键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题。
    //     if (map.has(head)) {
    //         return true;
    //     }
    //     map.set(head,true);
    //     head = head.next;
    // }
    // // 默认没有环
    // return false;

    // 2. 快慢指针
    // 思考：有环的情况下，快指针一定能追上慢指针么？解释：https://leetcode-cn.com/problems/linked-list-cycle/solution/hui-you-ji-hui-xiang-yu-ma-you-ke-neng-y-l6gu/
    // 至少 2 个节点才能构成一个环
    if (!head || !head.next) {
        return false;
    }

    // 设置快慢指针
    let slow = head;
    let fast = head.next;

    // 如果快指针一直没有追上慢指针
    while (slow !== fast) {
        // 如果没有环，则快指针会抵达终点
        if (!fast || !fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    // 如果有环，那么快指针会追上慢指针
    return true;

};