/*
491. Non-decreasing Subsequences

Given an integer array nums, return all the different possible non-decreasing subsequences of the given array with at least two elements. You may return the answer in any order.

Example 1:

Input: nums = [4,6,7,7]
Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
Example 2:

Input: nums = [4,4,3,2,1]
Output: [[4,4]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = function (nums) {
  let res = [];
  let element = [];

  function backtrack(pos) {
    if (element.length >= 2) res.push([...element]);
    let existing = new Set();
    for (let i = pos; i < nums.length; i++) {
      if (existing.has(nums[i])) continue;
      if (element.length == 0 || element[element.length - 1] <= nums[i]) {
        existing.add(nums[i]);
        element.push(nums[i]);
        backtrack(i + 1);
        element.pop();
      }
    }
  }
  backtrack(0);
  return res;
};

let nums = [4, 6, 7, 7];
findSubsequences(nums);
