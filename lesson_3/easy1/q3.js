let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty('Spot'));

let additionalAges = { Marilyn: 22, Spot: 237 };

ages = Object.assign(ages, additionalAges);

console.log(ages);