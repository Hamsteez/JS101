function multiplyList(arr1, arr2) {
  let soltnArr = [];
  arr1.forEach((val, idx) => {
    soltnArr.push(val * arr2[idx]);
  });
  console.log(soltnArr);
}
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]