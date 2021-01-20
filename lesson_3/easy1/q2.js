function exclamationFinder(str) {
  let len = str.length - 1;
  if (str[len] === '!') {
    return true;
  } else {
    return false;
  }
}

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(exclamationFinder(str1));
console.log(exclamationFinder(str2));

//solution --> str1.endsWith("!"); // true
//             str2.endsWith("!"); // false