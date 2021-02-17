function greeting (arr, obj) {
  let name = arr.join(' ');
  let values = Object.values(obj);
  console.log(`Hello, ${name}! Nice to have a ${values[0]} ${values[1]} around.`);
}

greeting(['John', 'Q', 'Doe'], { title: "Master", occupation: "Plumber" });