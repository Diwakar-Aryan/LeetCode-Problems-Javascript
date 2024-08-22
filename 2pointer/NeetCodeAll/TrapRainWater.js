/**
 * 42. Trapping Rain Water
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 * compute how much water it can trap after raining.
 * 
 Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  if (!height.length) return 0;

  let l = 0,
    r = height.length - 1;
  let leftmax = height[l],
    rightmax = height[r];
  let res = 0;

  while (l < r) {
    if (leftmax < rightmax) {
      l += 1;
      leftmax = Math.max(leftmax, height[l]);
      res += leftmax - height[l];
    } else {
      r -= 1;
      rightmax = Math.max(rightmax, height[r]);
      res += rightmax - height[r];
    }
  }
  return res;
};


const T1 =  trap([0,1,0,2,1,0,1,3,2,1,2,1])
const T2 = trap([4,2,0,3,2,5])

console.log(T1,T2);