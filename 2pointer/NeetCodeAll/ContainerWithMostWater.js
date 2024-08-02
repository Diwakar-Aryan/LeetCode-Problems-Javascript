/**
 * 11. Container With Most Water
 * You are given an integer array height of length n. 
 * Find two lines that together with the x-axis form a container, such that the container contains the most water. 
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Return the maximum amount of water a container can store.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1

 * 
 * @param {number[]} height 
 * @returns {number}
 */

const maxArea = function (height) {
  let left = 0,
    right = height.length - 1;

  let maxAr = -Infinity;

  while (left < right) {
    maxAr = Math.max(
      Math.min(height[left], height[right]) * (right - left),
      maxAr
    );
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxAr;
};

const T1 = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
const T2 = maxArea([1, 1]);

console.log(T1, T2);
