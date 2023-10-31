function solve(number) {
  let sum = 0;
  number = String(number);
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  console.log(sum === Number(number[0] * number.length));
  console.log(sum);
}
solve(2222222);
solve(1234);
