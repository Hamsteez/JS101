/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/*
there are a set of letters that are paired together and you can only use each pair once and one letter from each pair.
ie: B:O. If you use the letter B, you can no longer use the letter O in that word.
input is a word/string and output is a boolean value that determines if that word is possible to make based upon the pairs that
were used.
first I need to create an obj that has all the pairs of letters.
Then I need to break the obj into an array of keys and an array of values.
Then I need to split the word given by user, referred to as str, into an array of letters, referred to as strArr.
Then I loop thru the strArr and see if I can match it with any value from the keys array.
If I find a match then I go to the obj and delete the key:value pair that had that letter.
If there was no match then I check the same strArr value with the values array.
If I find a match then I do the same thing and delete from the obj.
If there is no match in either then I return false immediately.
At the end of each iteration I need to update the keys array and the values array every time because I deleted a value.
If the loop goes thru and doesnt return false from not finding any values in the arrays then I return true.
*/

function isBlockWord(str) {
  let obj = {
    B:'O',   X:'K',   D:'Q',   C:'P',   N:'A',
    G:'T',   R:'E',   F:'S',   J:'W',   H:'U',
    V:'I',   L:'Y',   Z:'M'
  };
  let keysArr = Object.keys(obj);
  let valsArr = Object.values(obj);
  let strArr = str.toUpperCase().split('');
  // console.log(strArr);
  let returnVal = true;
  strArr.forEach(letter => {
    if (keysArr.includes(letter)) {
      delete obj[letter];
      // console.log(obj, letter);
      keysArr = Object.keys(obj);
      valsArr = Object.values(obj);
    } else if (valsArr.includes(letter)) {
      keysArr.forEach(key => {
        if (obj[key] === letter) {
          delete obj[key];
          // console.log(obj, letter);
          keysArr = Object.keys(obj);
          valsArr = Object.values(obj);
        }
      });
    } else {
      returnVal = false;
    }
  });
  // console.log(obj);
  console.log(returnVal);
  return returnVal;
}

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('floW');       // true
isBlockWord('APPLE');      // false
isBlockWord('apple');      // false
isBlockWord('apPLE');      // false
isBlockWord('Box');        // false