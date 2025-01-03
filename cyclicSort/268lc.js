/*
268. Missing Number
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

*/

const missingNumber = function (nums) {
  let i = 0;
  let n = nums.length;

  //sort first
  while (i < n) {
    let j = nums[i];
    if (nums[i] < n && nums[i] != nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  //find the number missing from current index
  for (i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return n;
};

let c1 = missingNumber([4, 0, 3, 1]); //2
let c2 = missingNumber([8, 3, 5, 2, 4, 6, 0, 1]); //7
console.log(c1, c2);
