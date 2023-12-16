function solve() {
  input = document.getElementById("input").value;
  sentences = input.split(".");
  output = document.getElementById("output");

  sentences = sentences.filter((s) => s.length > 0).map((s) => (s += "."));

  let counter = 0;
  let currentParagraph = "";
  while (sentences.length > 0) {
    currentParagraph += sentences.shift();
    counter++;
    if (counter == 3 && sentences.length > 0) {
      output.innerHTML += `<p>${currentParagraph}</p>`;
      currentParagraph = "";
      counter = 0;
    } else if (sentences.length == 0) {
      output.innerHTML += `<p>${currentParagraph}</p>`;
    }
  }
}
