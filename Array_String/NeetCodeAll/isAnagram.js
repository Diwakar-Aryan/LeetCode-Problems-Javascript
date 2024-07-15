/**
 * Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Input: s = "racecar", t = "carrace"
Output: true

 */

function isAnagram(s, t) { 
   let stringHM = {}

   if(s.length != t.length) return false

   for(let i =0 ; i < s.length; i++) {
      //
      stringHM[s[i]] = stringHM[s[i]] ? stringHM[s[i]] + 1 : 1  
      //
      stringHM[t[i]] = stringHM[t[i]] ? stringHM[t[i]] - 1 : -1  
   }

   for(let i in stringHM) {
      if(stringHM[i] !== 0 ) return false ;
   }

   return true;

}


const T1 = isAnagram("racecar","carrace")

console.log(T1)