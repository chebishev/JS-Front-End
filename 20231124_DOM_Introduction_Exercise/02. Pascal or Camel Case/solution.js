function solve() {
  const textToConvert = document
    .getElementById("text")
    .value.toLowerCase()
    .split(" ");
  const namingConvention = document.getElementById("naming-convention").value;

  let result;

  switch (namingConvention) {
    case "Camel Case":
      firstElement = textToConvert.shift();
      converArrayToCamelCase(textToConvert);
      result = firstElement + result;
      break;
    case "Pascal Case":
      converArrayToCamelCase(textToConvert);
      break;
    default:
      result = "Error!";
      break;
  }

  function converArrayToCamelCase(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    result = array.join("");
  }
  output = document.getElementById("result");
  output.innerHTML = result;
}
