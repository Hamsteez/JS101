function multiplicativeAverage(arr) {
  let solution = arr.reduce((acc, val) => acc * val);
  solution /= arr.length;
  console.log(solution.toFixed(3));
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"