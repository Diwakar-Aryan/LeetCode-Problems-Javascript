/**
 * Given a pattern and a string s, find if s follows the same pattern.

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

 * 
 * 
 * 
 * 
 * @param {*} pattern 
 * @param {*} s 
 */


const wordPattern = function(pattern,s) {
    s = s.split(" ")
    if(pattern.length !== s.length) {
        return false;
    }

    const wordToChar = {}
    const charToWord = {}

    for(let i =0; i< pattern.length;i++) {
        if(wordToChar[s[i]] && wordToChar[s[i]] != pattern[i]) return false

        if(charToWord[pattern[i]] && charToWord[pattern[i]]!=s[i]) return false

        wordToChar[s[i]] = pattern[i]
        charToWord[pattern[i]] = s[i]
    }
    return true

}

const T1 = wordPattern('abba','dog cat cat dog')
const T2 = wordPattern('abcb', 'dog cat cow cat')
const T3 = wordPattern('abc','dog cat dog')
const T4 = wordPattern('abcd','dog cat')

console.log(T1, T2, T3, T4)