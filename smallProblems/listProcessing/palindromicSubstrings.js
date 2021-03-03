function palindromes(str) {
  let arr = substrings(str);
  let newArr = [];
  arr.forEach(segment => {
    if ((segment.length > 1) && (segment === segment.split('').reverse().join(''))) {
      newArr.push(segment);
    }
  });
  console.log(newArr);
}

function substrings(str) {
  let arr = str.split('');
  let sol = arr.map((_, idx) => {
    return leadingSubstrings(str.slice(idx, str.length));
  });
  return sol.flat();
}

function leadingSubstrings(str) {
  let arr = str.split('');
  let newArr = [];
  arr.reduce((acc, char) => {
    newArr.push(acc + char);
    return acc + char;
  }, []);
  return newArr;
}

palindromes('abcd');
palindromes('madam');
palindromes('hello-madam-did-madam-goodbye');
palindromes('knitting cassettes');