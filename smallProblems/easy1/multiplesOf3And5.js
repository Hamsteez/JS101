function multisum(num) {
  let tot = 0;

  for (let counter = 1; counter <= num; counter++) {
    if ((counter % 3) === 0 || (counter % 5) === 0) {
      tot += counter;
    }
  }
  console.log(tot);
  return tot;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168