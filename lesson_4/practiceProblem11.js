/*
conv str to array
create arr for keys (letters)
create arr for values (occurrences)
run first loop to see if char is in the keys array (.includes)
if it is then increment the count for the corresponding values arr
*/

function count(str) {
  let strArr =  str.split('');
  let letters = [];
  let occ = {};

  strArr.forEach(function charExist(char) {
    if (char !== ' ') {
      if (letters.includes(char)) {
        occ[char] += 1;
      } else {
        letters.push(char);
        occ[char] = 1;
      }
    }
  });
  console.log(occ);
}
let statement = "The Flintstones Rock";
count(statement);