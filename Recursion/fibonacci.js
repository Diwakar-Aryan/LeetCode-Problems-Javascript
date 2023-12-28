function fib(n, a, b) {
  if (n > 0) {
    fib(n - 1, b, a + b);
    console.log(a, " ");
  }
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// let ans = fib(5, 0, 1);
let ans = fibonacci(5);
console.log(ans);
