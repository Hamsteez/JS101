// eslint-disable-next-line max-lines-per-function
function merge(arr1, arr2) {
  let sortedArr = [];
  let copy2 = arr2.slice();
  if (arr1.length === 0) {
    sortedArr = arr2;
  } else if (arr2.length === 0) {
    sortedArr = arr1;
  } else {
    arr1.forEach(num1 => {
      for (let counter = 0; counter < copy2.length; counter++) {
        if (num1 < copy2[counter]) {
          sortedArr.push(num1);
          break;
        } else {
          let num = copy2.shift();
          sortedArr.push(num);
          counter--;
        }
      }
    });
    sortedArr.push(arr1[arr1.length - 1]);
  }
  console.log(sortedArr);
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]