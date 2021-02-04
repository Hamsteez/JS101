let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let x = arr.map(miniArr => {
  return miniArr.filter(num => num % 3 === 0);
});

console.log(x);