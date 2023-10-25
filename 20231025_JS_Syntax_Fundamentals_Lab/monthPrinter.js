function getMonth(number) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let output;
  if (0 >= number || number > 12) {
    output = "Error!";
  } else {
    output = month[number - 1];
  }
  console.log(output);
}

getMonth(2);
getMonth(13);
