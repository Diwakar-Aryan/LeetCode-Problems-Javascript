/**
 * 162. Find Peak Element
 * A peak element is an element that is strictly greater than its neighbors.
 * Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
 * 
 * You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.


Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {

   let l = 0, r = nums.length - 1

   while (l <= r) {
      let m = l + Math.floor((r - l) / 2)

      if (m > 0 && nums[m] < nums[m - 1]) {
         r = m - 1
      } else if (m < nums.length && nums[m] < nums[m + 1]) {
         l = m + 1
      } else {
         return m
      }
   }

};

const T1 = findPeakElement([1, 2, 1, 3, 5, 6, 4])
const T2 = findPeakElement([1, 2, 3, 1])
console.log(T1, T2);