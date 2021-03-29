/* eslint-disable max-lines-per-function */
function binarySearch(arr, key) {
  let currentWord = '';
  let counter = 0;

  while (arr.length > 0) {
    let halfLength = Math.trunc((arr.length - 1) / 2);
    currentWord = arr[halfLength];
    counter += (Math.ceil(arr.length / 2));
    if (currentWord === key) {
      counter--;
      console.log(counter);
      return counter;
    } else if (currentWord < key) {
      arr = arr.slice(halfLength + 1);
    } else if (currentWord > key) {
      counter = 0;
      arr = arr.slice(0, halfLength);
    }
  }

  console.log(-1);
  return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6