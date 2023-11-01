function solve(number, ...args) {
  number = Number(number);
  let operations = {
    chop: (number) => number / 2,
    dice: (number) => Math.sqrt(number),
    spice: (number) => number + 1,
    bake: (number) => number * 3,
    fillet: (number) => number * 0.8,
  };
  for (let i = 0; i < args.length; i++) {
    number = operations[args[i]](number);
    console.log(number);
  }
}
solve("32", "chop", "chop", "chop", "chop", "chop");
solve("9", "dice", "spice", "chop", "bake", "fillet");
