// 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

// 假定 BST 有如下定义：

// 结点左子树中所含结点的值小于等于当前结点的值
// 结点右子树中所含结点的值大于等于当前结点的值
// 左子树和右子树都是二叉搜索树
// 例如：
// 给定 BST [1,null,2,2],

//    1
//     \
//      2
//     /
//    2
// 返回[2].

// 提示：如果众数超过1个，不需考虑输出顺序

// 进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-mode-in-binary-search-tree
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
 * @return {number[]}
 */
// 思考：首先这是一个二叉搜索树，那么 左子树 <= root <= 右子树，所以自然而然想到了中序遍历，
// 并且得到的结果是一个递增的元素组成的一个数组。然后利用map得到这个数组中出现频率最高的元素，
// 但是这样是利用了额外的空间，有没有更好的方法？
// 

function MiddleOrderTraversal(root, res) {
    if (root.left) {
        MiddleOrderTraversal(root.left, res)
    }
    res.push(root.val)
    if (root.right) {
        MiddleOrderTraversal(root.right, res)
    }
}
var findMode = function (root) {
    if (!root) {
        return [];
    }
    const res = [];
    MiddleOrderTraversal(root, res);
    const map = new Map();
    for (let index = 0; index < res.length; index++) {
        if (map.has(res[index])) {
            let count = map.get(res[index]);
            count++;
            map.set(res[index], count)
        } else {
            map.set(res[index], 1)
        }
    }
    const ordinaryArray = [], modeArray = [];
    for (let item of map.entries()) {
        ordinaryArray.push({
            key: item[0],
            count: item[1]
        })
    }
    ordinaryArray.sort((a, b) => {
        return b.count - a.count;
    });
    for (let index = 0; index < ordinaryArray.length; index++) {
        const item = ordinaryArray[index];
        if (!modeArray.length || modeArray[modeArray.length - 1].count === item.count) {
            modeArray.push(item)
        } else {
            break
        }
    }
    return modeArray.map((item) => {
            return item.key;
        }
    )
};