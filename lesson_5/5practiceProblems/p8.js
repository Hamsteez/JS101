let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vals = Object.values(obj);
vals.forEach(key => {
  key.forEach(str => {
    str.split('').forEach(char => {
      if ('aeiou'.includes(char)) {
        console.log(char);
      }
    });
  });
});