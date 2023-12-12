function extract(content) {
  allText = document.getElementById(content).textContent;
  foundParenthesis = false;
  output = [];
  word = "";
  for (let i = 0; i < allText.length; i++) {
    if (allText[i] == "(") {
      foundParenthesis = true;
    }
    if (foundParenthesis == true) {
      word += allText[i];
    }
    if (allText[i] == ")") {
      output.push(word);
      word = "";
      foundParenthesis = false;
    }
  }
  return output.join("; ");
}
