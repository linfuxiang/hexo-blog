/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;

  if (len === 0) return 0;

  if (len === 1) return nums[0];

  let prev = nums[0];
  let result = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    [prev, result] = [result, Math.max(prev + nums[i], result)];
  }
  return result;
};

rob([1, 2, 3, 1]);
