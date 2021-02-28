function sum(num) {
  let str = String(num);
  let arr = str.split('');
  let sol = arr.reduce((acc, num) => Number(acc) + Number(num));
  console.log(sol);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45