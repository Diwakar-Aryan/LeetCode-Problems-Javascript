function fact(n) {
  if (n <= 1) {
    return 1;
  }
  return n * fact(n - 1);
}

let ans = fact(9);
console.log(ans);
