/**
 * 946. Validate Stack Sequences
 * 
 * Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.
 * 
 * 
 * 
 * 
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {

   const stack = []
   let j = 0
   for (let i = 0; i < pushed.length; i++) {
      stack.push(pushed[i])

      while (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
         stack.pop()
         j++
      }
   }
   return stack.length === 0 && j === popped.length
};

