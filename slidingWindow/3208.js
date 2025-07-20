/**
 * 3208. Alternating Groups II
 * There is a circle of red and blue tiles. You are given an array of integers colors and an integer k. The color of tile i is represented by colors[i]:
 * An alternating group is every k contiguous tiles in the circle with alternating colors (each tile in the group except the first and last one has a different color from its left and right tiles).

   Return the number of alternating groups.

   Note that since colors represents a circle, the first and the last tiles are considered to be next to each other.

   Example 1:

   Input: colors = [0,1,0,1,0], k = 3

   Output: 3

   Example 2:

   Input: colors = [0,1,0,0,1,0,1], k = 6

   Output: 2
*/

/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
const numberOfAlternatingGroups = function (colors, k) {

   const N = colors.length

   let l = 0, res = 0

   for (let r = 1; r < N + k - 1; r++) {
      if (colors[r % N] === colors[(r - 1) % N]) {
         l = r
      }

      if (r - l + 1 > k) {
         l++
      }

      if (r - l + 1 == k) {
         res++
      }
   }

   return res

};

// const colors = [0, 1, 0, 1, 0], k = 3
const colors = [0, 1, 0, 0, 1, 0, 1], k = 6

console.log(numberOfAlternatingGroups(colors, k));