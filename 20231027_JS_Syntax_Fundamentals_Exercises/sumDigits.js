function solve(number) {
  number = String(number);
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  console.log(sum);
}
solve(245678);
solve(97561);
solve(543);
