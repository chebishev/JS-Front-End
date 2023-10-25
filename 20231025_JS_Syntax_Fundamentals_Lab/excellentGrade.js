function isExcellent(grade) {
  let output;
  if (grade >= 5.5) {
    output = "Excellent";
  } else {
    output = "Not excellent";
  }
  console.log(output);
}

isExcellent(5.5);
isExcellent(4.35);
