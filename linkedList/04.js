// 83. 删除排序链表中的重复元素
// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 示例 1:

// 输入: 1->1->2
// 输出: 1->2
// 示例 2:

// 输入: 1->1->2->3->3
// 输出: 1->2->3

// 递归,找到和head的val不同的节点next，然后对next进行递归
var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let next = head.next;
    while (next) {
        if (head.val !== next.val) {
            break;
        }else{
            next = next.next;
        }
    }
    head.next = deleteDuplicates(next)
    return head;
};