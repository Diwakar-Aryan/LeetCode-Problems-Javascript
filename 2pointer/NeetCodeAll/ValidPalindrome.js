/**
 * 125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
 */

function checkCharIsLetter(char) {
  return /[a-zA-Z]/.test(char);
}

const isPalindrome = function (s) {
  let fp = 0;
  let sp = s.length - 1;

  while (fp <= sp) {
    if (!checkCharIsLetter(s[fp])) {
      fp++;
      continue;
    }

    if (!checkCharIsLetter(s[sp])) {
      sp--;
      continue;
    }

    if (s[fp].toLowerCase() !== s[sp].toLowerCase()) {
      return false;
    }
    fp++;
    sp--;
  }

  return true;
};

const T1 = isPalindrome("A man, a plan, a canal: Panama");
const T2 = isPalindrome(" ");
const T3 = isPalindrome("race a car");

console.log(T1, T2, T3);
