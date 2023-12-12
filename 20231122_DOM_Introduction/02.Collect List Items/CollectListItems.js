function extractText() {
  listItems = document.getElementById("items");
  result = document.getElementById("result");
  result.innerHTML = listItems.textContent;
}
