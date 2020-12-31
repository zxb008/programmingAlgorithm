// 82. 删除排序链表中的重复元素 II
// 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

// 示例 1:

// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5
// 示例 2:

// 输入: 1->1->1->2->3
// 输出: 2->3

// 注意：看清题意，是经排序的链表，说明val相同的元素一定是在一起的

var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head;
    }
    // 找到值不和head相同的节点curr
    let curr = head;
    while (curr) {
        curr = curr.next;
        if (curr && (head.val !== curr.val)) {
            break;
        }
    }
    if (!curr) {
        // curr === null,说明没有找到和head不同的节点，那么全部删掉，返回null
        return null
    }
    // 这里需要判断curr和head.next
    if (curr.val === head.next.val) {
        // curr 就是第二个节点，说明head没有重复，保留head
        head.next = deleteDuplicates(curr)
    }else{
        head = deleteDuplicates(curr)
    }
    
    return head;
};