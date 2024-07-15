function rotate(nums) {
  k = 1
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums, l, r) {
  while (l < r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }
}


let nums = [9, 8, 7, 6, 4, 2, 1, 3]
rotate(nums)

console.log(nums);