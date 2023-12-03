function solve(string) {
  sentence = string.split(" ");
  output = [];
  sentence.forEach((element) => {
    element = element.toLowerCase();
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i].toLowerCase() === element) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      if (!output.includes(element)) {
        output.push(element);
      }
    }
  });
  console.log(output.join(" "));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
solve("Cake IS SWEET is Soft CAKE sweet Food");
