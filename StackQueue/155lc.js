class MinStack {

   constructor() {
      this.stack = []
      this.min = Infinity
   }

   push(val) {
      this.min = Math.min(this.min, val)
      this.stack.push(val)

   }
   pop() {
      const removedElement = this.stack.shift()
      if (removedElement === this.min) {
         let minimum = Infinity
         for (let i = 0; i < this.stack.length; i++) {
            minimum = Math.min(minimum, this.stack[i])
         }
         this.min = minimum
      }
   }
   top() {
      return this.stack[0]
   }
   getMin() {
      return this.min
   }
}

const obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)

console.log(obj.getMin());
