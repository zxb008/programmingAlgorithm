// 147. 对链表进行插入排序
// 对链表进行插入排序。


// 插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
// 每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。



// 插入排序算法：

// 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
// 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
// 重复直到所有输入数据插入完为止。


// 示例 1：

// 输入: 4->2->1->3
// 输出: 1->2->3->4
// 示例 2：

// 输入: -1->5->3->4->0
// 输出: -1->0->3->4->5

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
var insertionSortList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let prev = head;
    let curr = head.next;
    while (curr) {
        if (curr.val > prev.val || curr.val === prev.val) {
            prev = curr;
            curr = curr.next;
        } else {
            prev.next = curr.next;
            // 现在将curr在head到prev之间的链表之间插入进合适的位置
            let min = null;
            let max = head;
            let next;
            while (max) {
                if (curr.val < max.val) {
                    if (min) {
                        curr.next = max;
                        min.next = curr;
                    } else {
                        // min 是null
                        curr.next = max;
                        head = curr;
                    }
                    break;
                }
                next = max.next;
                min = max;
                max = next;
            }
        }
    }
    return head;
};

var insertionSortList = function (head) {
    // 首先本题中返回值不是原本链表的头的话，我们可以使用虚拟节点。
    // 所以可以采用虚节点：
    // 1. 将头节点变成中间节点，简化判断。
    // 2. 通过在合适的时候断开链接，返回链表的中间节点。
    const dummy = new ListNode(0);
    dummy.next = head;

    let curr = dummy.next;
    if (!curr || !curr.next) {
        return curr;
    }
    while (curr && curr.next) {
        if (curr.val <= curr.next.val) {
            // 当前节点的值小于或等于下一个节点的值，那么继续下一次循环
            curr = curr.next;
            continue;
        }
        // 当前节点的值大于下一个节点的值

        // 找到正确的插入位置
        let prev = dummy
        while (prev.next.val < curr.next.val) {
            prev = prev.next;
        }
        // 此时prev.next的值刚好大于curr.next的值，所以curr.next需要插入prev的后面一个位置（同时因为引入了虚拟节点，那么不需要考虑边界问题）
        let next = curr.next;
        curr.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }
    return dummy.next;
};
