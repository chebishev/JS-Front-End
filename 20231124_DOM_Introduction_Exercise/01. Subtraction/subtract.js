function subtract() {
  firstNumber = document.getElementById("firstNumber").value;
  secondNumber = document.getElementById("secondNumber").value;
  result = document.getElementById("result");
  result.innerHTML = Number(firstNumber) - Number(secondNumber);
}
