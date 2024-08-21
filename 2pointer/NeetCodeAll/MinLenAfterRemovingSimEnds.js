/**
 * 1750. Minimum Length of String After Deleting Similar Ends
 * Given a string s consisting only of characters 'a', 'b', and 'c'. 
 * You are asked to apply the following algorithm on the string any number of times:
 * i) Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
 * ii) Pick a non-empty suffix from the string s where all the characters in this suffix are equal.
 * iii)The prefix and the suffix should not intersect at any index.
 * iv)The characters from the prefix and suffix must be the same.
 * v)Delete both the prefix and the suffix.
Return the minimum length of s after performing the above operation any number of times (possibly zero times).

Example 1:

Input: s = "ca"
Output: 2
Explanation: You can't remove any characters, so the string stays as is.
Example 2:

Input: s = "cabaabac"
Output: 0
Explanation: An optimal sequence of operations is:
- Take prefix = "c" and suffix = "c" and remove them, s = "abaaba".
- Take prefix = "a" and suffix = "a" and remove them, s = "baab".
- Take prefix = "b" and suffix = "b" and remove them, s = "aa".
- Take prefix = "a" and suffix = "a" and remove them, s = "".
Example 3:

Input: s = "aabccabba"
Output: 3
Explanation: An optimal sequence of operations is:
- Take prefix = "aa" and suffix = "a" and remove them, s = "bccabb".
- Take prefix = "b" and suffix = "bb" and remove them, s = "cca".

 * @param {string} s
 * @return {number}
 */
const minimumLength = function (s) {
  let l = 0,
    r = s.length - 1;

  while (l < r && s[l] == s[r]) {
    let tmp = s[l];
    while (l <= r && s[l] == tmp) {
      l = l + 1;
    }
    while (l <= r && s[r] == tmp) {
      r = r - 1;
    }
  }
  return r - l + 1;
};


const T1 = minimumLength("ca")
const T2 = minimumLength("cabaabac")
const T3 = minimumLength("aabccabba")


console.log(T1, T2, T3);