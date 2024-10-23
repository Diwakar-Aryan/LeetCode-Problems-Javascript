/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/

const generateParenthesis = function (n) {
  const result = [];
  generate(result, "", 0, 0, n);
  console.log(result);
};

function generate(result, s, open, close, n) {
  //Base Condition
  if (open == n && close == n) {
    result.push(s);
    return;
  }
  //If number of open parenthesis is less than n
  if (open < n) generate(result, s + "(", open + 1, close, n);

  //If close parenthesis is needed
  if (close < open) {
    generate(result, s + ")", open, close + 1, n);
  }
}

generateParenthesis(4);
