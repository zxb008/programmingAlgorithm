// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

// 例如输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 镜像输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

//  

// 示例 1：

// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof
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
 * @return {TreeNode}
 */
// 思考：首先肯定是需要递归的，然后每次操作是将左子树和右子树调换位置
var mirrorTree = function(root) {
    if (root === null || (root.left===null && root.right === null)) {
        // 节点个数为0 或 1 的时候，直接返回 
        return root
    }
    mirrorTree(root.left);
    mirrorTree(root.right);
    let left = root.left;
    let right = root.right;
    root.left = right;
    root.right = left;
    return root;
   
};