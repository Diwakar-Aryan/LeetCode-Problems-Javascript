/**
 * 724. Find Pivot Index
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 
 */


const pivotIndex = function (nums) {

   let lSum = 0;
   const tSum = nums.reduce((previous, current) => {
      return previous  + current
   }, 0)

   for (let i =1; i< nums.length;i++) {
      lSum += nums[i-1]
      const rSum = tSum - lSum - nums[i]

      if(lSum === rSum ) {
         return i
      }
   }

   return -1
};

const T1 = pivotIndex([1, 7, 3, 6, 5, 6])
// const T2 = pivotIndex([1,2,3])

console.log(T1)