/*
1079. Letter Tile Possibilities

You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles. 

Example 1:

Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:

Input: tiles = "AAABBC"
Output: 188
Example 3:

Input: tiles = "V"
Output: 1
*/

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  let result = new Set();
  let flag = new Map();
  let s = "";

  function backtrack() {
    for (let i = 0; i < tiles.length; i++) {
      if (flag.get(i) != 1) {
        s = s + tiles[i];
        flag.set(i, true);
        result.add(s);
        backtrack();
        flag.set(i, false);
        s = s.slice(0, -1);
      }
    }
  }
  backtrack();
  return result.size;
};

console.log(numTilePossibilities("AAABBC"));
