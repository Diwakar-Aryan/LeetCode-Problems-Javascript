/**
 * 1968. Array With Elements Not Equal to Average of Neighbors
 * You are given a 0-indexed array nums of distinct integers. 
 * You want to rearrange the elements in the array such that every elemeYou are given a 0-indexed array nums of distinct integers. 
 * You want to rearrange the elements in the array such that every element in the rearranged array is not equal to the average of its neighbors.nt in the rearranged array is not equal to the average of its neighbors.
 * More formally, the rearranged array should have the property such that for every i in the range 1 <= i < nums.length - 1, (nums[i-1] + nums[i+1]) / 2 is not equal to nums[i].

Return any rearrangement of nums that meets the requirements.
Example 1:

Input: nums = [1,2,3,4,5]
Output: [1,2,4,5,3]
Explanation:
When i=1, nums[i] = 2, and the average of its neighbors is (1+4) / 2 = 2.5.
When i=2, nums[i] = 4, and the average of its neighbors is (2+5) / 2 = 3.5.
When i=3, nums[i] = 5, and the average of its neighbors is (4+3) / 2 = 3.5.
Example 2:

Input: nums = [6,2,0,9,7]
Output: [9,7,6,2,0]
Explanation:
When i=1, nums[i] = 7, and the average of its neighbors is (9+6) / 2 = 7.5.
When i=2, nums[i] = 6, and the average of its neighbors is (7+2) / 2 = 4.5.
When i=3, nums[i] = 2, and the average of its neighbors is (6+0) / 2 = 3.

 */


const rearrangeArray = function(nums) {
    nums.sort()
    let res = []

    let left =0 , right = nums.length - 1
    while(res.length != nums.length) {

        res.push(nums[left])
        left++

        if(left<=right){
            res.push(nums[right])
            right--
        }
    }
    return res
};

const T1 = rearrangeArray([1,2,3,4,5])
const T2 = rearrangeArray([6,2,0,9,7])


console.log(T1, T2);