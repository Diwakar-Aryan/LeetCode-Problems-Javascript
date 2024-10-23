/*
473. Matchsticks to Square

You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

Return true if you can make this square and false otherwise.

Example 1:

Input: matchsticks = [1,1,2,2,2]
Output: true
Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
Example 2:

Input: matchsticks = [3,3,3,3,4]
Output: false
Explanation: You cannot find a way to form a square with all the matchsticks.
*/

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
const makesquare = function (matchsticks) {
  let sum = matchsticks.reduce((prev, acc) => prev + acc, 0) / 4;
  let length = Math.floor(sum);
  console.log(length);
  let sides = new Array(4).fill(0);
  if (sum !== length) {
    return false;
  }
  matchsticks.sort((a, b) => b - a);
  console.log(matchsticks);
  function backtrack(i) {
    if (i === matchsticks.length) {
      return true;
    }
    for (let j = 0; j < 4; j++) {
      if (sides[j] + matchsticks[i] <= length) {
        sides[j] += matchsticks[i];
        if (backtrack(i + 1)) {
          return true;
        }
        sides[j] -= matchsticks[i];
      }
    }
    return false;
  }
  return backtrack(0);
};

let matchsticks = [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let res = makesquare(matchsticks);
console.log(res);
