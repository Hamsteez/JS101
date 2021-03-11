function triangle(side1, side2, side3) {
  let arr = [side1, side2, side3];
  arr.sort((a, b) => a - b);
  if (arr[0] === 0 || ((arr[0] + arr[1]) <= arr[2]) ) {
    console.log('invalid');
  } else {
    // eslint-disable-next-line no-lonely-if
    if (side1 === side2 && side2 === side3) {
      console.log('equilateral');
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      console.log('isosceles');
    } else {
      console.log('scalene');
    }
  }
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"