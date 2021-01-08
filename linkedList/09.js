// 109. 有序链表转换二叉搜索树
// 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

// 示例:

// 给定的有序链表： [-10, -3, 0, 5, 9],

// 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 思路：用两个指针，一块一慢，快的每次走两步，慢的每次走一步，这样当快指针遍历结束时，慢指针指向的也就是链表的中间位置。这时候把中间位置的结点的值作为二叉搜索树当前结点的值
var sortedListToBST = function(head) {
    if (!head) {
        return null;
    }
    if(!head.next){
        return new TreeNode(head.val);
    }
    // 注意这里要让slow和fast同时从head出发，这样才能使得slow指向是中偏右那个节点（如果链表是偶数长度）
    // 如果定义 let fast = head.next;那么到最后，slow指向是中偏左边那个节点（如果链表是偶数长度）
    // 当然，如果链表长度是奇数，两种情况下，那么slow最后都刚刚好指向中心点
    // 总结:在使用快慢指针的时候，一定要考虑好适用那种情况
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 此时 slow 指向的节点将会被作为平衡二叉树的根节点（链表的长度是奇数，slow刚好指向中心点，链表的长度是偶数，slow指向中偏右边的那个节点）
    // 因为这里要求平衡二叉搜索树，要求:左节点<根节点<右节点,所以在链表长度为偶数的时候，要求slow指向的应该是中偏右的那个节点。
    const tree = new TreeNode(slow.val);
    // 截取链表的前半部分
    let pre = head;
    while (pre.next !== slow) {
        pre = pre.next;
    }
    pre.next = null;
    tree.left = sortedListToBST(head);
    tree.right = sortedListToBST(slow.next);
    return tree;
};