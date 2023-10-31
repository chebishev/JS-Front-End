function solve(year) {
  date = new Date(year, 1, 29);
  if (date.getMonth() == 1) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
solve(1984);
solve(2003);
solve(4);
