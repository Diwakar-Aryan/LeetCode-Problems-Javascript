/**
 * Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Input: 
nums = [3,4,5,6], target = 7
Output: [0,1]

Input: nums = [4,5,6], target = 10
Output: [0,2]

Input: nums = [4,5,6], target = 10
Output: [0,2]

 */

function twoSum (nums,target) {
   const hmap = {}
   for(let i = 0;i<nums.length;i++){
     
      let compliment = target - nums[i]

      if(hmap[compliment] !== undefined) {
         return [hmap[compliment],i]
      }
      hmap[nums[i]] = i;
   }
   
}


const T1 = twoSum([3,4,5,6],7)
const T2 = twoSum([4,5,6],10)
console.log(T2)