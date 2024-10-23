/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 * 
 * Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 * 
 * 
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

   let l = 0
   let r = nums.length - 1
   let res = []

   while (l <= r) {
      let lSquared = Math.pow(nums[l], 2)
      let rSquared = Math.pow(nums[r], 2)

      if (lSquared > rSquared) {
         res.push(lSquared)
         l++
      } else {
         res.push(rSquared)
         r--
      }
   }
   return res.reverse();
};

const T1 = sortedSquares([-4, -1, 0, 3, 10])
const T2 = sortedSquares([-7, -3, 2, 3, 11])

console.log(T1, T2);
