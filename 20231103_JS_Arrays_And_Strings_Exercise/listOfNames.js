function solve(array) {
  //array.sort() gives only 80/100 I don't know why
  array.sort((a, b) => {
    return a.localeCompare(b);
  });
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1}.${array[i]}`);
  }
}
solve(["John", "Bob", "Christina", "Ema"]);
