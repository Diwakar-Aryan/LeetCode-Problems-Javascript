/**
 * 
 * 27. Remove Element
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.


 */

var removeElement = function (nums, val) {


   let ptr1 = nums.length -1 
   let ptr2 = nums.length -2

   if(!nums) return 0
   if(nums.length == 1) {
      if(nums[0] === val) return 0
      return 1
   }

   while(ptr2 > -1) {
      if(nums[ptr1] === val) {
         ptr1 --;
         while(nums[ptr2] === val){
            ptr2--
            ptr1--
         }
      } else if(nums[ptr2] === val) {
         let temp = nums[ptr1]
         nums[ptr1] = nums[ptr2]
         nums[ptr2] = temp
         ptr2--
         ptr1--
      } else {

         ptr2--
      }


   }
   return ptr1+1

};




let nums = [3, 2, 2, 3]
let val = 3
// const T1 = removeElement(nums, val)

// console.log(T1)


const T2 = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)

console.log(T2)