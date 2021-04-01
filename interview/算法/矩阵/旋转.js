/**
 * N*N矩阵顺时针旋转90°
 * 方法：先水平翻转，再按对角线翻转
 * 时间复杂度O(n^2)，空间复杂度O(1)
 */

var rotate = function (matrix) {
    const n = matrix.length;
    // 水平翻转
    for (let i = 0; i < Math.floor(n / 2); i++) {
        [matrix[i], matrix[n - i - 1]] = [matrix[n - i - 1], matrix[i]];
    }
    // 对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};

var arr = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
];

var res = [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
];

rotate(arr);
console.log(arr);
