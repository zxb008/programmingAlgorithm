// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3

//  

// 示例 1：

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true
// 示例 2：

// 输入：root = [1,2,2,null,3,null,3]
// 输出：false
//  

// 限制：

// 0 <= 节点个数 <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof
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
 * @return {boolean}
 */
// 思考：本题可采用递归方法，不断地对比"左子树的左节点"和"右子树的右节点"
var compare = function (left, right) {
    if (left === null && right !== null) {
        return false;
    } else if (left !== null && right === null) {
        return false;
    } else if (left === null && right === null) {
        return true;
    } else if (left.val !== right.val) {
        return false;
    }
    return compare(left.left, right.right) && compare(left.right, right.left)

}
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }
    return compare(root.left, root.right)
};