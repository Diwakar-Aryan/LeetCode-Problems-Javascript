/**
 * Anagram Groups
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Input: strs = ["x"]
Output: [["x"]]

Input: strs = [""]
Output: [[""]]

 */

function groupAnagrams(strs) { 


   let res = {}

   for (const str of strs) {
      const count = Array(26).fill(0)

      for(const char of str) {
         count[char.charCodeAt(0)-'a'.charCodeAt(0)]++
      }

      const key = count.join('#')
      if(!res[key]) {
         res[key] = []
      }

      res[key].push(str)

   }
   return Object.values(res)
}


const T1 = groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])

console.log(T1)