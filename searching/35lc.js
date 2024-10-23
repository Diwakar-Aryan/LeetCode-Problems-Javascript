/*
35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

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

const searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  if (target < nums[start]) return -1;
  else if (target >= nums[end]) return nums.length;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    }
  }
  return end;
};
console.log(searchInsert([1, 3, 5, 6], 2));
