function solve(speed, area) {
  let limits = {
    residential: 20,
    city: 50,
    interstate: 90,
    motorway: 130,
  };
  if (speed <= limits[area]) {
    output = `Driving ${speed} km/h in a ${limits[area]} zone`;
  } else {
    let difference = speed - limits[area];
    let warningMessage = "";
    if (difference > 40) {
      warningMessage = "reckless driving";
    } else if (difference > 20) {
      warningMessage = "excessive speeding";
    } else {
      warningMessage = "speeding";
    }
    output = `The speed is ${difference} km/h faster than the allowed speed of ${limits[area]} - ${warningMessage}`;
  }
  console.log(output);
}
solve(40, "city");
solve(21, "residential");
solve(120, "interstate");
solve(200, "motorway");
