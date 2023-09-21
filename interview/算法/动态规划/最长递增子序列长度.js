var arr = [1, 5, 2, 4, 3];
// var arr = [1, 5, 2, 4, 3, 9, 6, 8, 7];
/**
 * Max0 = Max{1, 2, 3, 4} + 1
 * Max1 = Max{2, 3, 4} + 1
 * Max2 = Max{3, 4} + 1
 * Max3 = Max{4} + 1
 * Max4 = 1
 *
 * Result = Max0
 */
function func(arr) {
  // [1,5,2,4,3]
  const len = arr.length;
  let idx = len - 2;
  let max = [];
  max[len - 1] = 1;
  for (; idx >= 0; idx -= 1) {
    const target = arr[idx]; // 当前值
    for (let i = idx + 1; i < len; i += 1) {
      if (target <= arr[i]) {
        max[idx] = Math.max(max[idx] || 0, max[i]);
      }
    }
    max[idx] = (max[idx] || 0) + 1;
  }
  return max[0];
}
func(arr);
