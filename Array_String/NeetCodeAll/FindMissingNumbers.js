/**
 * 448. Find All Numbers Disappeared in an Array
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 
 */

const findDisappearedNumbers = function (nums) {
  let tempArr = new Array(nums.length).fill(0);
  const res = [];
  for (const i of nums) {
    tempArr[i - 1] = 1;
  }

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] == 0) {
      res.push(i + 1);
    }
  }
  return res;
};

const findDisappearedNumbersWithoutExtraMemory = function (nums) {
  const res = [];
  for (let n of nums) {
    let i = Math.abs(n) - 1;
    nums[i] = -1 * Math.abs(nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }

  return res;
};
const T1 = findDisappearedNumbersWithoutExtraMemory([4, 3, 2, 7, 8, 2, 3, 1]);
const T2 = findDisappearedNumbersWithoutExtraMemory([1, 1]);

console.log(T2, T1);
