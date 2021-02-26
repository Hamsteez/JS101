function halvsies(arr) {
  let length = arr.length;
  let firstHalfLoopLength = Math.ceil(length / 2);
  let secondHalfLoopLength = length - firstHalfLoopLength;
  let resultArr = [[], []];

  for (let loop1 = 0; loop1 < firstHalfLoopLength; loop1++) {
    resultArr[0].push(arr[loop1]);
  }

  for (let loop2 = 0; loop2 < secondHalfLoopLength; loop2++) {
    resultArr[1].push(arr[loop2 + firstHalfLoopLength]);
  }
  console.log(resultArr);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]