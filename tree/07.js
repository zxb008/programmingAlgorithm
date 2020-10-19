// 计算给定二叉树的所有左叶子之和。

// 示例：

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sum-of-left-leaves
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 思路：
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var sum = function (root, isLeft) {
    if (!root) {
        return 0;
    }
    if (isLeft && !root.left && !root.right) {
        return root.val + sum(root.left, true) + sum(root.right, false)
    } else {
        return sum(root.left, true) + sum(root.right, false)
    }

};
var sumOfLeftLeaves = function (root) {

    return sum(root, false);
};
let a = new TreeNode(3);
let b = new TreeNode(9);
let c = new TreeNode(20);
let d = new TreeNode(15);
let e = new TreeNode(7);

a.left = b;
a.right = c;

c.left = d;
c.right = e;
sumOfLeftLeaves(a)
// console.log(sumOfLeftLeaves(a));