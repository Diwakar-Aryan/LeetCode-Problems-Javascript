//

function fill(arr, row_length, col_length, pos_x, pos_y, target_color, color) {
  if (pos_x < 0 || pos_y < 0 || pos_x >= row_length || pos_y >= col_length)
    return;
  if (arr[pos_x][pos_y] != color) return;
  arr[pos_x][pos_y] = target_color;

  //right
  fill(arr, row_length, col_length, pos_x, pos_y + 1, target_color, color);
  //down
  fill(arr, row_length, col_length, pos_x + 1, pos_y, target_color, color);

  //left
  fill(arr, row_length, col_length, pos_x - 1, pos_y, target_color, color);

  //top
  fill(arr, row_length, col_length, pos_x, pos_y - 1, target_color, color);
}

let arr = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0],
  [1, 0, 0, 1, 1, 0, 1, 1],
  [1, 2, 2, 2, 2, 0, 1, 0],
  [1, 1, 1, 2, 2, 0, 1, 0],
  [1, 1, 1, 2, 2, 2, 2, 0],
  [1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1, 2, 2, 1],
];
let row_length = arr.length;
let col_length = arr[0].length;

fill(arr, row_length, col_length, 0, 0, 2, 1);

console.log(arr);
