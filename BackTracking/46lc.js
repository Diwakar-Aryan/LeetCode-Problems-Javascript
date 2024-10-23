/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 
*/
const permute = function (nums) {
  let res = [];
  backtrack(res, nums, []);
  return res;
};

function backtrack(res, nums, tempList) {
  if (tempList.length === nums.length) {
    res.push([...tempList]); // Deep copy to avoid mutation
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (tempList.includes(nums[i])) continue;
      tempList.push(nums[i]);
      backtrack(res, nums, tempList);
      tempList.pop();
    }
  }
}

let ans = permute([1, 2, 3]);
console.log(ans);
