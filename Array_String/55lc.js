var canJump = function (nums) {
  let i = 0;
  for (let reach = 0; i < nums.length && i <= reach; ++i) {
    reach = Math.max(reach, i + nums[i]);
  }
  console.log(i === nums.length);
};

canJump([2, 3, 1, 1, 4]);
