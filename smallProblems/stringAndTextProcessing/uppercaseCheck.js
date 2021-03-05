function isUppercase(str) {
  let arr = str.split('');
  let letters = arr.filter(char => {
    return char >= 'a' && char <= 'z';
  });
  console.log(!(letters.length > 0));
  return !(letters.length > 0);
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true