/*
784. Letter Case Permutation
Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.

Example 1:

Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
Example 2:

Input: s = "3z4"
Output: ["3z4","3Z4"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let res = [];
  function dfs(pos, curr = "") {
    if (pos == s.length) {
      res.push(curr);
      return;
    }
    const char = s[pos];

    if (char >= "a" && char <= "z") {
      dfs(pos + 1, curr + char.toLowerCase());
      dfs(pos + 1, curr + char.toUpperCase());
    } else {
      dfs(pos + 1, curr + char);
    }
  }
  dfs(0);
  return res;
};

let s = "a1b2";
letterCasePermutation(s);
