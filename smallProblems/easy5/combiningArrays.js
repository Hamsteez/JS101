function union(arr1, arr2) {
  let combinedArrs = arr1.slice();
  let secondArr = arr2.filter(num => {
    return !arr1.includes(num);
  });
  console.log(combinedArrs.concat(secondArr));
}
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]