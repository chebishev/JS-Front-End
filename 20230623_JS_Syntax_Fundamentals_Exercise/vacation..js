function solve(peopleCount, groupType, weekDay) {
  let total;
  let priceList = {
    Friday: [8.45, 10.9, 15],
    Saturday: [9.8, 15.6, 20],
    Sunday: [10.46, 16, 22.5],
  };
  switch (groupType) {
    case "Students":
      total = priceList[weekDay][0] * peopleCount;
      if (peopleCount >= 30) {
        total *= 0.85;
      }
      break;
    case "Business":
      if (peopleCount >= 100) {
        peopleCount -= 10;
      }
      total = priceList[weekDay][1] * peopleCount;
      break;
    case "Regular":
      total = priceList[weekDay][2] * peopleCount;
      if (peopleCount >= 10 && peopleCount <= 20) {
        total *= 0.95;
      }
      break;
  }

  console.log(`Total price: ${total.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
