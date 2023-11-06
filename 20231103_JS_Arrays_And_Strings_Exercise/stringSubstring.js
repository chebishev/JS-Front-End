function solve(substring, string) {
  let arrayToCheck = string.toLowerCase().split(" ");
  let output = `${substring} not found!`;
  for (word of arrayToCheck) {
    if (word === substring) {
      output = substring;
      break;
    }
  }
  console.log(output);
}
solve("javascript", "JavaScript is the best programming language");
solve("python", "JavaScript is the best programming language");
