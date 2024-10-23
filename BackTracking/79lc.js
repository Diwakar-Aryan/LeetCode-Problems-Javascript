/*
79. Word Search
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

*/

//TC = O(n*m *dfs) --> dfs -> 4^len(word)
//TC - O(n*m*4^n)
const exist = function (board, word) {
  let rows = board.length;
  let cols = board[0].length;
  let path = [];
  function dfs(r, c, i) {
    if (i == word.length) {
      return true;
    }
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      word[i] != board[r][c] ||
      path.indexOf(`${r}+${c}`) > -1
    )
      return false;

    path.push(`${r}+${c}`);

    res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    const index = path.indexOf(`${r}+${c}`);
    if (index > -1) {
      path.splice(index, 1);
    }

    return res;
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
};
let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCB";

console.log(exist(board, word));
