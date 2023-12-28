function printPascal(row, col) {
  if (col == 0) {
    return 1;
  } else if (row === 0) {
    return 0;
  } else {
    return printPascal(row - 1, col) + printPascal(row - 1, col - 1);
  }
}

let n = 5;

console.log(printPascal(4, 2));
