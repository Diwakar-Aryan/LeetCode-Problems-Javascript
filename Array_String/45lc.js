const jump = function (nums) {
  let steps = 0;
  let end = 0;
  let reach = 0;
  if (nums.length == 1 && nums[0] === 0) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    reach = Math.max(reach, i + nums[i]);
    if (reach >= nums.length - 1) {
      steps++;
      break;
    }
    if (end == i) {
      end = reach;
      steps++;
    }
  }
  return steps;
};
console.log(jump([0]));
