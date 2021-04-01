/**
 * 判断升序的矩阵中是否存在某个元素
 * 方法：按行合并，使用二分查找
 * 时间复杂度O(log(mn))，空间复杂度O(1)
 */

var searchMatrix = function (matrix, target) {
    const m = matrix[0].length;
    const n = matrix.length;
    let start = 0,
        end = m * n - 1;
    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;
        const num = matrix[Math.floor(mid / m)][mid % m];
        if (num === target) {
            return true;
        }
        if (num < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
};

var arr = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
];

searchMatrix(arr, 3);
