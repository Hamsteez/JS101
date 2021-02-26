function interleave(arr1, arr2) {
  let length = arr1.length;
  let solution = [];
  for (let counter = 0; counter < length; counter++) {
    solution.push(arr1[counter], arr2[counter]);
  }
  console.log(solution);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

function interleave1(arr1, arr2) {
  let solution = [];
  arr1.forEach(val => {
    solution.push(val, arr2[arr1.indexOf(val)]);
  });
  console.log(solution);
}

interleave1([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

function interleave2(arr1, arr2) {
  let solution = arr1.map(val => {
    return ([val, arr2[arr1.indexOf(val)]]);
  }).flat();
  console.log(solution);
}

interleave2([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

function interleave3(arr1, arr2) {
  let solution = arr1.reduce((acc, currVal) => {
    acc.push(currVal, arr2[arr1.indexOf(currVal)]);
    return acc;
  }, []);
  console.log(solution);
}

interleave3([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]