function solve(start, stop) {
  let sum = 0;
  let list = "";
  while (start <= stop) {
    sum += start;
    list += start + " ";
    start++;
  }
  console.log(list);
  console.log("Sum: " + sum);
}
solve(5, 10);
solve(0, 26);
