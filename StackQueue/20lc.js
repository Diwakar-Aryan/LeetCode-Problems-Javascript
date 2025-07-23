/**
 * 20 Valid Parentheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:

   Open brackets must be closed by the same type of brackets.
   Open brackets must be closed in the correct order.
   Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false

 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
   let stack = []
   let closeToOpen = {
      ")": "(",
      "}": "{",
      "]": "["
   }

   for (let i of s) {
      if (i in closeToOpen) {
         if (stack && stack[stack.length - 1] === closeToOpen[i]) {
            stack.pop()
         } else {
            return false
         }
      } else {
         stack.push(i)
      }
   }
   if (!stack.length) return true
   return false

};

console.log(isValid("()"))
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
