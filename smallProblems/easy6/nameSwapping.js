function swapName(str) {
  let newStr = str.split(' ').reverse().join(', ');
  console.log(newStr);
}
swapName('Joe Roberts');    // "Roberts, Joe"