function search() {
  let text = document.getElementById("searchText").value;
  let towns = Array.from(document.querySelectorAll("#towns li"));
  let result = document.getElementById("result");
  matchesCounter = 0;

  for (let town of towns) {
    if (text == "") {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
    } else if (town.textContent.includes(text)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matchesCounter++;
    } else {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
    }
    result.innerHTML = `${matchesCounter} matches found`;
  }
}
