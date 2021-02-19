function swap(str) {
  let wordsArr = str.split(' ');
  let wordSplitArr = wordsArr.map(word => word.split(''));
  let swappedArr = wordSplitArr.map(arr => {
    arr.push(arr.shift());
    arr.splice(0, 0, arr[arr.length - 2]);
    arr.splice(arr.length - 2, 1);
    return arr;
  });
  let combinedArr = swappedArr.map(arr => arr.join(''));
  console.log(combinedArr.join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"