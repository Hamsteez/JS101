/*
iterate thru the object and whenever a pair of a key is equal to fruits
then push that key value pair into a new object.
Then return the object.
*/

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let newObj = {};
  for (const property in obj) {
    console.log(obj[property]);
    if (obj[property] === 'Fruit') {
      newObj[property] = obj[property];
    }
  }
  console.log(newObj);
}

selectFruit(produce);
console.log(produce);