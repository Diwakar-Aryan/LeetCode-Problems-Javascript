const twoSum = function (nums, target) {
  let fp = 0;
  let sp = nums.length - 1;
  let resArr = [];
  while (fp <= sp) {
    if (nums[fp] + nums[sp] == target) {
      resArr = [fp, sp];
      fp++;
      sp--;
    } else if (nums[fp] + nums[sp] > target) {
      sp--;
    } else if (nums[fp] + nums[sp] > target) {
      fp++;
    }
  }
  console.log(resArr);
};

twoSum([2, 7, 11, 15], 9);
