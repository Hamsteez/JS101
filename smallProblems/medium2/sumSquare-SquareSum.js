function sumSquareDifference(num) {
  let counter = 0;
  let countArr = [];
  while (counter <= num) {
    countArr.push(counter);
    counter++;
  }
  let leftHandVal = (countArr.reduce((a, b) => a + b)) ** 2;
  let rightHandArr = countArr.map(val => val ** 2);
  let rightHandVal = rightHandArr.reduce((a, b) => a + b);
  let finalVal = leftHandVal - rightHandVal;

  console.log(finalVal);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150