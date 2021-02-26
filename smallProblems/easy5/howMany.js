let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'sUv', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let newArr = [];
  let valStorer = {};
  let tinyArr = arr.map(val => val.toLowerCase());
  tinyArr.forEach(val => {
    if (newArr.includes(val)) {
      valStorer[val] += 1;
    } else {
      newArr.push(val);
      valStorer[val] = 1;
    }
  });
  for (const property in valStorer) {
    console.log(`${property} => ${valStorer[property]}`);
  }
}

countOccurrences(vehicles);
