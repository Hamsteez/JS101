function teddyAge() {
  let age = 0;
  while (age < 20) {
    age = Math.floor(Math.random() * 121);
  }
  console.log(`Teddy is ${age} years old!`);
}
teddyAge();