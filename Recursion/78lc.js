/*
Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
*/

function generateSubsets(nums, res = [], curr = [], i = 0) {
  if (i == nums.length) {
    res.push(curr);
    return;
  }
  generateSubsets(nums, res, curr, i + 1);
  generateSubsets(nums, res, [nums[i],...curr], i + 1);
}

const subsets = function (nums) {
  let res = [];
  generateSubsets(nums, res);
  console.log(res);
};

subsets([1, 2, 3]);
