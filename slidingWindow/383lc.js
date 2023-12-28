// Ransom Note

function canConstruct(ransomNote, magazine) {
  let obj = {};
  ans = true;
  for (let i of ransomNote) {
    if (obj[i] === undefined) {
      obj[i] = 1;
    } else {
      obj[i] = obj[i] + 1;
    }
  }
  for (let i of magazine) {
    if (obj[i] !== undefined && obj[i] > 0) {
      obj[i] = obj[i] - 1;
    }
  }
  for (let i in obj) {
    if (obj[i] !== 0) {
      ans = false;
    }
  }
}

canConstruct("addsdfa", "addsdfa");
console.log(ans);
