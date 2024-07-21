/**
 * 
 * 680. Valid Palindrome II
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false

 */

function reverseString(str) {
    return str.split("").reverse().join("")
}

const validPalindrome = function(s) {

    let fp = 0, sp = s.length -1;

    while(fp<=sp){

        if(s[fp]!== s[sp]){
            let skipL = s.substring(fp+1,sp+1)
            let skipR = s.substring(fp,sp)
            return (skipL === reverseString(skipL) || skipR === reverseString(skipR))
        }

        fp++;
        sp--;

    }
    return true

}

const T1 = validPalindrome("abc")


console.log(T1)