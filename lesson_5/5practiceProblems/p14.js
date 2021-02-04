let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let ansArr = [];

for (let fruitVeg in obj) {
  if (obj[fruitVeg].type === 'fruit') {
    let caps = obj[fruitVeg].colors.map(str => {
      return str[0].toUpperCase() + str.substring(1);
    });
    ansArr.push(caps);
  } else if (obj[fruitVeg].type === 'vegetable') {
    ansArr.push(obj[fruitVeg].size.toUpperCase());
  }
}

console.log(ansArr);

console.log(obj);