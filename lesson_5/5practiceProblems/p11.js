let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let x = arr.map(obj => {
  let newObj = Object.create(obj);
  for (let key in newObj) {
    newObj[key] += 1;
  }
  return newObj;
});
console.log(x);
console.log(arr);
