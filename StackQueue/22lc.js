/**
 * 22. Generate Parentheses
 * 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {

   let res = [], stack = []
   // only add open parenthesis if open < n

   // only add close if open > close

   // valid if open === close === n

   function backtrack(openN, closedN) {
      if (openN === n && closedN === n) {
         res.push(stack.join(""))
         return
      }

      if (openN < n) {
         stack.push("(")
         backtrack(openN + 1, closedN)
         stack.pop()
      }

      if (closedN < openN) {
         stack.push(")")
         backtrack(openN, closedN + 1)
         stack.pop()
      }
   }
   backtrack(0, 0)
   return res

};

console.log(generateParenthesis(3));
