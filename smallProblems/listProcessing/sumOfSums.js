function sumOfSums(arr) {
  let newArr = [];
  arr.reduce((acc, char) => {
    newArr.push(Number(acc) + Number(char));
    return Number(acc) + Number(char);
  }, []);
  let sol = newArr.reduce((acc, num) => acc + num);
  console.log(sol);
}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35