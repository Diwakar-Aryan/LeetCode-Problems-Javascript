/**
 * 
 * 
 * 169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {

   let m ; let i =0;

   for(const x of nums) {
      if(i == 0) {
         m = x;
         i =1;
      } else if(m === x) {
         i =i+1
      } else {
         i =i-1
      }
   }

   return m;

};

const T1 = majorityElement([3, 2, 3])
const T2 = majorityElement([2, 2, 1, 1, 1, 2, 2])


console.log(T1, T2)