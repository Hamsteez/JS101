function isPalindrome(str) {
  let strLen = str.length;
  let halfLen = Math.floor(strLen / 2);
  let firstHalf;
  let secondHalfReversed;
  if (strLen % 2 === 1) {
    firstHalf = str.slice(0, halfLen);
    secondHalfReversed = str.slice(halfLen + 1, strLen).split('').reverse().join('');
  } else {
    firstHalf = str.slice(0, halfLen);
    secondHalfReversed = str.slice(halfLen, strLen).split('').reverse().join('');
  }
  if (firstHalf === secondHalfReversed) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true