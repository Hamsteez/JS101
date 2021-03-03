
function substrings(str) {
  let arr = str.split('');
  // let sol = [];
  // for (let counter = 0; counter < arr.length; counter++) {
  //   sol.push(leadingSubstrings(str.slice(counter, str.length)));
  // }
  let sol = arr.map((_, idx) => {
    return leadingSubstrings(str.slice(idx, str.length));
  });
  console.log(sol.flat());
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

substrings('abcde');