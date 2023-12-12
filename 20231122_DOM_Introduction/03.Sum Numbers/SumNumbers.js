function calc() {
  firstNumber = document.getElementById("num1").value;
  secondNumber = document.getElementById("num2").value;
  result = document.getElementById("sum");
  result.value = Number(firstNumber) + Number(secondNumber);
}
