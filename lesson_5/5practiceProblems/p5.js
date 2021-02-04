let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

function ageCalc(obj) {
  let totAge = 0;
  let names = Object.keys(obj);
  for (let counter = 0; counter < names.length; counter++) {
    if (obj[names[counter]].gender === 'male') {
      totAge += obj[names[counter]].age;
    }
  }
  return totAge;
}

console.log(ageCalc(munsters));