/**
 * 283. Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 
 */

const moveZeroes = function (nums) {
  if (nums.length < 2) {
    return nums;
  }

  let f = 0;
  let s = 1;

  while (f < nums.length && s < nums.length) {
    if (nums[f] != 0 && f < s) {
      f++;
      continue;
    }
    if (nums[s] === 0) {
      s++;
      continue;
    }
    if (nums[f] === 0 && nums[s] !== 0) {
      let temp = nums[f];
      nums[f] = nums[s];
      nums[s] = temp;
      f++;
      s++;
    }
  }
};
let T1 = [0, 1, 0, 3, 12];
moveZeroes(T1);

console.log(T1);
