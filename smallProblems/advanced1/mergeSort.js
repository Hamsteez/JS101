/* eslint-disable max-lines-per-function */

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let subArr1 = arr.slice(0, arr.length / 2);
  let subArr2 = arr.slice(arr.length / 2);

  subArr1 = mergeSort(subArr1);
  subArr2 = mergeSort(subArr2);

  return merge(subArr1, subArr2);
}

function merge(arr1, arr2) {
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();
  let result = [];
//5 9, 7 1

  while (copy1.length > 0 && copy2.length > 0) {
    if (copy1[0] <= copy2[0]) {
      result.push(copy1[0]);
      copy1.shift();
    } else {
      result.push(copy2[0]);
      copy2.shift();
    }
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);

}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]