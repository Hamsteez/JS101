let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let vals = Object.values(ages);
let tot = 0;
vals.forEach(num => {
  tot += num;
  console.log(tot);
});
