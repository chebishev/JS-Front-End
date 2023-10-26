function theaterPromotions(dayType, age) {
  const validAges = [18, 64, 122];
  const prices = {
    Weekday: [12, 18, 12],
    Weekend: [15, 20, 15],
    Holiday: [5, 12, 10],
  };

  let output;
  let index = 0;

  if (age < 0 || age > 122) {
    output = "Error!";
  } else {
    for (years of validAges) {
      if (age <= years) {
        output = `${prices[dayType][index]}$`;
        break;
      } else {
        index++;
      }
    }
  }
  console.log(output);
}

theaterPromotions("Weekday", 42);
theaterPromotions("Holiday", -12);
theaterPromotions("Holiday", 15);
