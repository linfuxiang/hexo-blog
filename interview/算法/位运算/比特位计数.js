/**
 * 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
 * 方法：对 x 和 x-1 进行 & 运算得到 y，bit[x] 比 bit[y] 多 1
 * 时间复杂度O(n)，空间复杂度O(n)
 */

// 令 y = x & (x - 1)               >> 1000 = 1001 & 1000
// bit[x] = bit[y] + 1              >> bit[1001] = bit[1000] + 1
// bit[x] = bit[x & (x - 1)] + 1
var countBits = function (num) {
  var res = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
    res[i] = res[i & (i - 1)] + 1;
  }
  return res;
};
