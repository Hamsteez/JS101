function repeater(str) {
  let arr = str.split('');
  let newArr = [];
  arr.forEach(char => {
    newArr.push(char);
    newArr.push(char);
  });
  console.log(newArr.join(''));
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""