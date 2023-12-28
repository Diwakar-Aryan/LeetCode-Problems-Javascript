var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let minLen = Infinity;

  for (let l = 0, r = 0; r < nums.length; r++) {
    sum = sum + nums[r];
    while (sum >= target) {
      minLen = Math.min(r - l + 1, minLen);
      sum = sum - nums[l];
      l++;
    }
  }
  if (minLen === Infinity) return 0;
  return minLen;
};

let nums = [2, 3, 1, 2, 4, 3];
let target = 7;
console.log(minSubArrayLen(target,nums))
