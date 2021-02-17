/* eslint-disable max-len */
function crunch(str) {
  let charLocation = 0;
  let fixedStr = '';
  while (charLocation < str.length) {
    if (str[charLocation] !== str[charLocation + 1]) {
      fixedStr += str[charLocation];
    }
    charLocation++;
  }
  console.log(fixedStr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""