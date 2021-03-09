function fibonacci(nVal) {
  if (nVal === 1 || nVal === 2) {
    return 1;
  }
  let sum = 1;
  let prevNum = 1;
  let total = 0;
  for (let counter = 3; counter <= nVal; counter++) {
    total = sum + prevNum;
    prevNum = sum;
    sum = total;
  }
  console.log(total);
  return total;
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050