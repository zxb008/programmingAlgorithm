// 530. 二叉搜索树的最小绝对差
// 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

 

// 示例：

// 输入：

//    1
//     \
//      3
//     /
//    2

// 输出：
// 1

// 解释：
// 最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
 

// 提示：

// 树中至少有 2 个节点。
// 本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 相同
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

function MiddleOrderTraversal(root, res) {
    if (root.left) {
        MiddleOrderTraversal(root.left, res)
    }
    res.push(root.val)
    if (root.right) {
        MiddleOrderTraversal(root.right, res)
    }
}
var getMinimumDifference = function(root) {
    const res = [];
    MiddleOrderTraversal(root, res);
    res.sort((a, b) => {
        return a - b;
    });
    const result = [];
    for (let index = 0; index < res.length-1; index++) {
        result.push(res[index+1]-res[index]);
    }
    result.sort((a, b) => {
        return a - b;
    });
    return result[0]
};