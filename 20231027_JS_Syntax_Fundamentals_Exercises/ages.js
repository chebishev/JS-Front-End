function solve(number) {
  let ages = {
    baby: number >= 0 && number <= 2,
    child: number >= 3 && number <= 13,
    teenager: number >= 14 && number <= 19,
    adult: number >= 20 && number <= 65,
    elder: number >= 66,
  };
  if (number < 0) {
    console.log("out of bounds");
  } else {
    for (age in ages) {
      if (ages[age]) {
        console.log(age);
        break;
      }
    }
  }
}
solve(20);
solve(1);
solve(100);
solve(-1);
