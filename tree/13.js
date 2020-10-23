// 102. 二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    function traversal(root, depth) {
        if (root !== null) {
            if (!res[depth]) {
                res[depth] = [];
            };
            res[depth].push(root.val)
            if (root.left) {
                traversal(root.left, depth + 1);
            };
            if (root.right) {
                traversal(root.right, depth + 1);
            };
        };
    };
    traversal(root, 0);
    return res;
};