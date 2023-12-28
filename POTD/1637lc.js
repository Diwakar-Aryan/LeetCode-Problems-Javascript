/*
1637. Widest Vertical Area Between Two Points Containing No Points

Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

Note that points on the edge of a vertical area are not considered included in the area.

Input: points = [[8,7],[9,9],[7,4],[9,7]]
Output: 1
Explanation: Both the red and the blue area are optimal.
Example 2:

Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
Output: 3

*/

var maxWidthOfVerticalArea = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let currentMax = -Infinity;

  for (let i = 1; i < points.length; i++) {
    if (points[i - 1][0] === points[i][0]) continue;
    currentMax = Math.max(currentMax, points[i][0] - points[i - 1][0]);
  }
  return currentMax === -Infinity ? 0 : currentMax;
};

let c1Args = [
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
];
let c1 = maxWidthOfVerticalArea(c1Args);

let c2Args = [
  [3, 1],
  [9, 0],
  [1, 0],
  [1, 4],
  [5, 3],
  [8, 8],
];
let c2 = maxWidthOfVerticalArea(c2Args);
console.log(c2);
