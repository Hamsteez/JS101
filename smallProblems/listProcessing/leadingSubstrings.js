function leadingSubstrings(str) {
  let arr = str.split('');
  let newArr = [];
  arr.reduce((acc, char) => {
    newArr.push(acc + char);
    return acc + char;
  }, []);
  console.log(newArr);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]