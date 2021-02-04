let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let ordered = arr.map(insArr => {
  if (typeof insArr[0] === 'string') {
    return insArr.slice().sort((a, b) => {
      if (b > a) {
        return 1;
      } else if (b < a) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    return insArr.slice().sort((a, b) => b - a);
  }
});
console.log(arr);
console.log(ordered);