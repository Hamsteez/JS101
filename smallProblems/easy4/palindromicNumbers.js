function isPalindromicNumber(num) {
  let string = String(num);
  console.log(string === string.split('').reverse().join(''));
  return string === string.split('').reverse().join('');
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true