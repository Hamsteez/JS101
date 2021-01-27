
function oddIndices(arr) {
  let doubledArr = [];
  let counter = 0;

  while (counter < arr. length) {
    let currentIndex = arr[counter];
    if (counter % 2 === 1) {
      doubledArr.push(currentIndex * 2);
    } else {
      doubledArr.push(currentIndex);
    }
    counter++;
  }
  console.log(doubledArr);
  return doubledArr;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
oddIndices(myNumbers);  // => [2, 4, 6, 14, 2, 6]

// not mutated
console.log(myNumbers);