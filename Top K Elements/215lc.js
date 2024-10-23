/*
215. Kth Largest Element in an Array

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/

//TC - O(k*n)
//AS - O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  for (let i = 0; i < k; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        swap(nums, j, i);
      }
    }
  }
  return nums[k - 1];
};

const findKthLargest2 = function (nums, k) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    //get random index
    const pivot = Math.floor(Math.random() * (j - i + 1) + i);
    function sort() {
      [nums[pivot], nums[j]] = [nums[j], nums[pivot]];
      let start = i;
      let end = i;

      while (end < j) {
        if (nums[end] <= nums[j]) {
          [nums[start], nums[end]] = [nums[end], nums[start]];
          start++;
        }
        end++;
      }
      [nums[start], nums[j]] = [nums[j], nums[start]];
      return start;
    }
    //get correct position of pivot
    const pIndex = sort();
    if (pIndex === j - k) return nums[pIndex];

    if (pIndex < j - k) i = pIndex + 1;
    else j = pIndex - 1;
  }
};

function swap(nums, ind1, ind2) {
  let temp = nums[ind1];
  nums[ind1] = nums[ind2];
  nums[ind2] = temp;
}

let nums = [3, 2, 1, 5, 6, 4];
let k = 2;

console.log(findKthLargest2(nums, k));

