function mathOperations(firstNumber, secondNumber, operator) {
  let operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b,
    "**": (a, b) => a ** b,
  };
  let result = operations[operator](firstNumber, secondNumber);
  console.log(result);
}

mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");
