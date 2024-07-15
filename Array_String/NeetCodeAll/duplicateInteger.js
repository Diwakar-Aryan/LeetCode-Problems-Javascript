/**
 * Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Input: nums = [1, 2, 3, 3]
Output: true

Input: nums = [1, 2, 3, 4]
Output: false

 */

function hasDuplicate(nums) {
   let numSet = new Set()
   for (let i of nums) {
      if (numSet.has(i)) {
         return true
      }
      numSet.add(i)
   }


   return false;
}

console.log(hasDuplicate([1, 2, 3, 4,4]))