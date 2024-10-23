/*
1758. Minimum Changes To Make Alternating Binary String

You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

Return the minimum number of operations needed to make s alternating.

Example 1:

Input: s = "0100"
Output: 1
Explanation: If you change the last character to '1', s will be "0101", which is alternating.
Example 2:

Input: s = "10"
Output: 0
Explanation: s is already alternating.
Example 3:

Input: s = "1111"
Output: 2
Explanation: You need two operations to reach "0101" or "1010".
*/

const minOperations = function (s) {
  let s1 = new Array(Math.floor(s.length / 2)).fill("01").join("");
  let s2 = new Array(Math.floor(s.length / 2)).fill("10").join("");
  if (s.length % 2 == 0) {
    s1 = s1 + "0";
    s2 = s2 + "1";
  }
  let cnt1 = 0;
  let cnt2 = 0;
  for (let i in s) {
    if (s[i] !== s1[i]) {
      cnt1++;
    }
    if (s[i] !== s2[i]) {
      cnt2++;
    }
  }
  return Math.min(cnt1, cnt2);
};

let s = "101101111";

console.log(minOperations(s));
