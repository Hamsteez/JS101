function sequence(num) {
  let newNum = 1;
  let arr = [];
  do {
    arr.push(newNum);
    newNum++;
  } while (newNum <= num);
  console.log(arr);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]