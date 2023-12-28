function geekonacci(n, a, b, c) {
  if (n == 1) {
    return a;
  } else if (n == 2) {
    return b;
  } else if (n == 3) {
    return c;
  }
  return (
    geekonacci(n - 1, a, b, c) +
    geekonacci(n - 2, a, b, c) +
    geekonacci(n - 3, a, b, c)
  );
}

let a = 1,
  b = 3,
  c = 2;
console.log(geekonacci(4, a, b, c));
