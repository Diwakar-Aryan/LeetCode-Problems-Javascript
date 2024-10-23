/*
347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

*/

//Here Bucket sort is used for TC - O(N); AS - O(N)
//otherwise TC - O(k*log N)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  let count = {}
  let freq = new Array(nums.length + 1).fill([])

  for (let n of nums) {
    count[n] = 1 + count[n] || 1;
  }

  for (let [key, value] of Object.entries(count)) {
    // Pointer 


  }
  // console.log(count, freq);
  let res = []
  for (let i = freq.length - 1; i > 0; i--) {
    for (let el of freq[i]) {
      res.push(el)
      if (res.length === k) {
        return res;
      }
    }
  }
  return res
};

// console.log(topKFrequent([1, 1, 1, 3, 4, 3, 4, 5], 2))
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2))