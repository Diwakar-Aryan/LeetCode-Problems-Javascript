/*
698. Partition to K Equal Sum Subsets

Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

Example 1:

Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
Example 2:

Input: nums = [1,2,3,4], k = 3
Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = function (nums, k) {
  nums.sort((a, b) => b - a);
  let sum = nums.reduce((prev, acc) => prev + acc, 0);
  let target = Math.floor(sum / k);
  if (target != sum / k) {
    return false;
  }
  let used = new Array(nums.length).fill(false);
  function backtrack(i, k, subsetSum) {
    if (k === 0) {
      return true;
    }
    if (subsetSum == target) {
      return backtrack(0, k - 1, 0);
    }

    for (let j = i; j < nums.length; j++) {
      if (used[j] || subsetSum + nums[j] > target) continue;
      used[j] = true;
      if (backtrack(j + 1, k, subsetSum + nums[j])) return true;
      used[j] = false;
    }
    return false;
  }
  return backtrack(0, k, 0);
};

let nums = [1, 2, 3, 5];
let k = 2;
console.log(canPartitionKSubsets(nums, k));
