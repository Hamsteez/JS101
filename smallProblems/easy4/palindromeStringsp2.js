function isPalindrome(string) {
  console.log(string === string.split('').reverse().join(''));
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(str) {
  let updStr = str.toLowerCase();
  let updArr = [];
  let arrOfStr = updStr.split('');
  arrOfStr.forEach(char => {
    // eslint-disable-next-line radix
    if ((char >= 'a' && char <= 'z') || (Number.isNaN(parseInt(char)) === false)) {
      updArr.push(char);
    }
  });
  updStr = updArr.join('');
  isPalindrome(updStr);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false