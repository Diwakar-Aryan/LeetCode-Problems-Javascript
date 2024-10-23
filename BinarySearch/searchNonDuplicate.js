/**
 *540. Single Element in a Sorted Array 
 * 
 * You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
 * 
 * Return the single element that appears only once.
 * 
 * Your solution must run in O(log n) time and O(1) space.
 * 
 * Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
 * 
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {

   let l = 0, r = nums.length - 1
   while (l < r) {
      let mid = l + Math.floor((r - l) / 2)

      if (mid % 2 == 1) {
         mid--;
      }

      if (nums[mid] === nums[mid + 1]) {
         l = mid + 2
      } else {
         r = mid
      }
   }
   return nums[l]

};


const T1 = singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])
const T2 = singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])

console.log(T1, T2);
