// const recursion = (n, memo = {}) => {
//   if (n <= 2) {
//     return 1;
//   }

//   if (n in memo) {
//     return memo[n];
//   }

//   memo[n] = recursion(n - 1, memo) + recursion(n - 2, memo);
//   return memo[n];
// };
// console.log(recursion(30));



// recursiyasiz 
function fib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log(fib(1476));
