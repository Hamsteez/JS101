let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

console.log(Object.fromEntries(arr));

let obj = {};

arr.forEach(insArr => {
  obj[insArr[0]] = insArr[1];
});

console.log(obj);