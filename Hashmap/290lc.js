/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 
*/

const wordPattern = function (pattern, s) {
  let patternMap = new Map();
  let sMap = new Map();
  let sArr = s.split(" ");
  console.log(sArr);
  //   if (sArr.length !== pattern.length) {
  //     return false;
  //   }

  for (let i = 0; i < sArr.length; i++) {
    if (pattern.length < i + 1) {
      return false;
    }

    if (patternMap.has(pattern[i])) {
      if (patternMap.get(pattern[i]) !== sArr[i]) {
        return false;
      }
      if (sMap.get(sArr[i]) !== pattern[i]) {
        return false;
      }
    } else {
      patternMap.set(pattern[i], sArr[i]);
      console.log(patternMap);
    }
  }

  for (let i = 0; i < pattern.length; i++) {
    if (sMap.has(sArr[i]) && sMap.get(sArr[i]) !== pattern[i]) {
      return false;
    } else {
      sMap.set(sArr[i], pattern[i]);
    }
  }
  return true;
};

let as = wordPattern("jquery", "jquery");
console.log(as);
