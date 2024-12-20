/*
1422. Maximum Score After Splitting a String

Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

 

Example 1:

Input: s = "011101"
Output: 5 
Explanation: 
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5 
left = "01" and right = "1101", score = 1 + 3 = 4 
left = "011" and right = "101", score = 1 + 2 = 3 
left = "0111" and right = "01", score = 1 + 1 = 2 
left = "01110" and right = "1", score = 2 + 1 = 3
Example 2:

Input: s = "00111"
Output: 5
Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
Example 3:

Input: s = "1111"
Output: 3
 
*/

const maxScore = function (s) {
  s = s.split("").map((x) => Number(x));
  let score = 0;
  let res = 0;
  if (s[0] === 0) score++;
  for (let i = 1; i < s.length; i++) {
    if (s[i] == 1) {
      score++;
    }
  }
  res = Math.max(res, score);
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] == "0") {
      score++;
    } else {
      score--;
    }
    res = Math.max(res, score);
  }
  return res;
};

let c1 = "011101";
let c2 = "00111";
let c3 = "1111";
let c4 = "11100";
let c5 = "00";
let c6 = "0100";
maxScore(c1);
maxScore(c2);
maxScore(c3);
maxScore(c4);
maxScore(c5);
maxScore(c6);
