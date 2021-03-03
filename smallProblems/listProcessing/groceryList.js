function buyFruit(arr) {
  let newArr = [];
  arr.forEach(miniArr => {
    for (let counter = 0; counter < miniArr[1]; counter++) {
      newArr.push(miniArr[0]);
    }
  });
  console.log(newArr);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]