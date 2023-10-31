function solve(groupCount, groupType, weekDay) {
  let types = {
    Students: [8.45, 9.8, 10.46],
    Business: [10.9, 15.6, 16],
    Regular: [15, 20, 22.5],
  };
  let days = {
    Friday: 0,
    Saturday: 1,
    Sunday: 2,
  };
  if (groupType == "Business" && groupCount >= 100) {
    groupCount -= 10;
  }
  let price = groupCount * types[groupType][days[weekDay]];
  if (groupType == "Students" && groupCount >= 30) {
    price *= 0.85;
  } else if (groupType == "Regular" && groupCount >= 10 && groupCount <= 20) {
    price *= 0.95;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
