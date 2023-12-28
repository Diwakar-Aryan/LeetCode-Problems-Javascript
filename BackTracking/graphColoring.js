function backtracking(graph) {
  /*
     Returns the an array with i elements, where the ith element is the solution
    for the ith element of the passed in graph.
    The type of elements returned is driven by the get_domain_values helper
    function - in this example it is the color for each continent
    */
  const solution = new Array(graph.length).fill(null);
  // Start backtracking from the first variable
  if (backtrackingRec(graph, solution, 0)) return solution;
  return null; // No solution found at all
}

function backtrackingRec(graph, solution, current) {
  if (current === null) return true; //Found a complete solution
  //Try each color in the domaimn
  for (const color of getDomainValues(graph, solution, current)) {
    solution[current] = color;
    const nextVar = selectUnassigned(graph, solution, current);
    // Recursively explore potential solutions with this color
    if (backtrackingRec(graph, solution, nextVar)) return true;

    // Backtrack if this color didn't work
    solution[current] = null;
  }
  return false;
}

function selectUnassigned(graph, solution, current) {
  if (current + 1 < solution.length) return current + 1;
  return null;
}

function getDomainValues(graph, solution, current) {
  const options = new Set(Array.from({ length: graph.length }, (_, i) => i));
  for (let i = 0; i < graph.length; i++) {
    if (graph[current][i] === i && solution[i] !== null) {
      options.delete(solution[i]);
    }
  }
  return options.values();
}

let graph = [
  [0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 1],
  [0, 0, 1, 0, 1],
  [1, 1, 1, 1, 0],
];
colors = backtracking(graph);
console.log(colors);
