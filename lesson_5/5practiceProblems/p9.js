let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let ordered = arr.map(insArr => {
  return insArr.slice().sort();
});
console.log(arr);
console.log(ordered);