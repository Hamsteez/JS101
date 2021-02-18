function getGrade(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let numGrade = (sum / 3).toFixed();
  if (numGrade >= 90 && numGrade <= 100) {
    console.log('A');
  } else if (numGrade >= 80 && numGrade < 90) {
    console.log('B');
  } else if (numGrade >= 70 && numGrade < 80) {
    console.log('C');
  } else if (numGrade >= 60 && numGrade < 70) {
    console.log('D');
  } else if (numGrade >= 0 && numGrade < 60) {
    console.log('F');
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"