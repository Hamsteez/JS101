function runningTotal(arr) {
  let finalArr = [];
  if (arr.length > 0) {
    finalArr.push(arr[0]);
    arr.reduce((num1, num2) => {
      finalArr.push(num1 + num2);
      return num1 + num2;
    });
  }
  console.log(finalArr);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []