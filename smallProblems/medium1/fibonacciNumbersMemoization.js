// let memo = {};
// function fibonacci(nth) {
//   if (nth <= 2) {
//     return 1;
//   } else if (memo[nth]) {
//     return memo[nth];
//   } else {
//     memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
//     return memo[nth];
//   }
// }

let memo = {
  1: 1,
  2: 1,
};
function fibonacci(nth) {
  let nthA = memo[nth - 1];
  if (!nthA) nthA = fibonacci(nth - 1);
  memo[nth] = nthA + memo[nth - 2];
  return memo[nth];
}

console.log(fibonacci(7));