/**
 * 724. Find Pivot Index
Easy
Topics
Companies
Hint
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 
 */


var pivotIndex = function (nums) {

   let lp = 0, rp = nums.length -1 , ls = nums[lp] , rs = nums[rp]

   while(lp < rp) {
         if(ls < rs) {
         lp++
         ls += nums[lp]
      }
      else if(ls > rs ) {
         rp--
         rs += nums[rp]
      } else {

         return (lp+1);
      }
   }

   return -1

};

// const T1 = pivotIndex([1, 7, 3, 6, 5, 6])
const T2 = pivotIndex([1,2,3])

console.log(T2)