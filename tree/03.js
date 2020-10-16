// 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

// 例如：

// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

//  

// 提示：

// 节点总数 <= 10000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 思路：递归这个数，然后比较左子树和右子树的深度，取更深的树
var maxDepth = function (root) {
    if (root === null) {
        return 0
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};