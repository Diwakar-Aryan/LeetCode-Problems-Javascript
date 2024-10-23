/*
Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
*/

const partition = function (s) {
  let res = [];
  backtrack(res, [], s, 0);
  return res;
};

function backtrack(res, tempList, s, start) {
  if (start === s.length) {
    res.push([...tempList]);
  } else {
    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s, start, i)) {
        tempList.push(s.substring(start, i + 1));
        backtrack(res, tempList, i + 1);
        tempList.pop();
      }
    }
  }
}
// Palindrome checking helper function
function isPalindrome(s, low, high) {
  while (low < high) {
    if (s.charAt(low++) !== s.charAt(high--)) return false;
  }
  return true;
}
const string = "aab";
const allPartitions = partition(string);

console.log(allPartitions);
