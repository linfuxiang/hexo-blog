/**
 * 获取数组的所有子集（元素互不相同）
 * 方法：子集数量刚好为2^n，二进制填充思想来取子集（数组为[1,2,3]，000代表[]，001代表[1]）
 * 时间复杂度O(n * 2^n)，空间复杂度O(n)
 */
var subsets = function (nums) {
    const res = [[]];
    const len = nums.length;
    for (let n = 1; n < 1 << len; n++) {
        // 001
        const temp = [];
        for (let j = 0; j < len; j++) {
            if (n & (1 << j)) {
                temp.push(nums[j]);
            }
        }
        res.push(temp);
    }
    return res;
};

subsets([1, 2, 3]);
