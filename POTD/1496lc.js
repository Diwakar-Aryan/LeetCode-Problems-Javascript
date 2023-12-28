/*
1496. Path Crossing
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.

Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
*/

var isPathCrossing = function (path) {
  let x = 0;
  let y = 0;
  let visited = new Set(["0+0"]);
  for (let i of path) {
    if (i == "N") {
      x += 1;
    } else if (i === "S") {
      x -= 1;
    } else if (i === "E") {
      y += 1;
    } else if (i === "W") {
      y -= 1;
    }
    let currPos = `${x}+${y}`;
    console.log(currPos);
    if (visited.has(currPos)) {
      return true;
    }
    visited.add(currPos);
  }
  return false;
};

let c1Args = "NNSWWEWSSESSWENNW";
// let c2Args = "NESWW";

c1 = isPathCrossing(c1Args);
// c2 = isPathCrossing(c2Args);
console.log(c1);
