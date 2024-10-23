/**
 * 35. Search Insert Position
* Given a sorted array of distinct integers and a target value, return the
index if the target is found. If not, return the index where it would be if it were inserted in order.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {

   let l = 0
   let r = nums.length -1

   while(l <= r) {
      let mid = l + Math.round((r - l)/2)

      if(target === nums[mid]) {
         return mid
      }
      if(target > nums[mid] ){
         l = mid + 1
      } else {
         r = mid - 1

      }
   }
   return l

};


const T1 = searchInsert([1,3,5,6],5)
const T2 = searchInsert([1, 3, 5, 6], 2)
const T3 = searchInsert([1, 3, 5, 6], 7)

console.log(T1, T2, T3);
