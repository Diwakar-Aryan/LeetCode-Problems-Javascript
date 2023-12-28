function dnf(nums) {
  let l = 0;
  let m = 0;
  let n = nums.length;
  let r = n - 1;

  while (m <= r) {
    if (nums[m] == 0) {
      swap(nums, l, m);
      l++;
      m++;
    } else if (nums[m] == 2) {
      swap(nums, m, r);
      r--;
    } else {
      m++;
    }
  }
}

function swap(nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

let nums = [0, 1, 2, 0, 1, 2, 1, 0];
dnf(nums);
console.log(nums);
