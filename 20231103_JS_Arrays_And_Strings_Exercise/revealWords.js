function solve(words, string) {
  wordsArray = words.split(", ");
  for (const word of wordsArray) {
    currentSubstring = "*".repeat(word.length);
    string = string.replace(currentSubstring, word);
  }
  console.log(string);
}

solve("great", "softuni is ***** place for learning new programming languages");
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
