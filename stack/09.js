/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0) return []
    var rows = matrix.length, columns = matrix[0].length;
    var left = 0, right = columns - 1, top = 0, bottom = rows - 1, res = [];
    //每次while循环，应该会把外面一层的边全部推进stack中，所以while循环里面应该有四个for循环，分别对应每个边
    while (left < right && top < bottom) {
        //最上面的边，top = 0；
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        //最右边的边
        for (let i = top + 1; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        //最下边的边
        for (let i = right - 1; i >= left; i--) {
            res.push(matrix[bottom][i])
        }
        //最左边的边
        for (let i = bottom - 1; i > top; i--) {
            res.push(matrix[i][left])
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    if (top === bottom) // 剩下一行，从左到右依次添加
    for (let i = left; i <= right; i++) res.push(matrix[top][i])
  else if (left === right) // 剩下一列，从上到下依次添加
    for (let i = top; i <= bottom; i++) res.push(matrix[i][left])
    return res;
};