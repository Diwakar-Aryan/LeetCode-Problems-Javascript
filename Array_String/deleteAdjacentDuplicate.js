function deleteAdjacentDuplicate(str) {
  let deleteCount = 0;
  let i = 1;
  while (i < str.length) {
    if (str[i - 1] == str[i]) {
      deleteCount++;
    }
    i++;
  }
  console.log(deleteCount);
}

let str = "AAABBB";
deleteAdjacentDuplicate(str);
