function findWordOccurrences(wordsArr) {
  let [wordsToMatch, ...sentences] = wordsArr;

  let occurrences = {};
  let wordsToMatchArr = wordsToMatch.split(" ");
  for (const word of wordsToMatchArr) {
    occurrences[word] = 0;
  }
  for (const word of sentences) {
    if (occurrences.hasOwnProperty(word)) {
      occurrences[word] += 1;
    }
  }
  let entries = Object.entries(occurrences);
  entries.sort((a, b) => {
    return b[1] - a[1];
  });
  for (const entry of entries) {
    console.log(`${entry[0]} - ${entry[1]}`);
  }
}
findWordOccurrences([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
findWordOccurrences([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
