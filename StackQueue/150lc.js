/**
 * 150. Evaluate Reverse Polish Notation
 * 
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
 * Evaluate the expression. Return an integer that represents the value of the expression.

 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {

   const stack = []
   let i = 0
   while (i < tokens.length) {
      if (tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" || tokens[i] == "/") {
         //calculation stack res
         const firstOperand = stack.pop()
         const secondOperand = stack.pop()
         if (tokens[i] == "+") {
            stack.push(firstOperand + secondOperand)
         } else if (tokens[i] == "-") {
            stack.push(secondOperand - firstOperand)
         } else if (tokens[i] == "*") {
            stack.push(firstOperand * secondOperand)
         } else if (tokens[i] == "/") {
            let div = 0
            if ((firstOperand > 0 && secondOperand > 0) || (firstOperand < 0 && secondOperand < 0)) {
               div = (Math.floor(secondOperand / firstOperand))
            }
            else {
               console.log("dfs");

               div = (Math.floor(Math.abs(secondOperand) / Math.abs(firstOperand))) * -1
            }
            stack.push(div)
            console.log(secondOperand, firstOperand, div, "DIV BLOCK");

         }
         console.log(stack);

      } else {
         stack.push(Number(tokens[i]))
      }

      i++;
   }
   console.log(stack);

   return (stack[0]);


};


// evalRPN(["2", "1", "+", "3", "*"])
// evalRPN(["4", "13", "5", "/", "+"])
// evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
// evalRPN(["4", "-2", "/", "2", "-3", "-", "-"])
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])