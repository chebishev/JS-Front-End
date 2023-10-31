function solve(...args) {
  let fruit = args[0];
  let weight = args[1] / 1000;
  let price = args[2];
  console.log(
    `I need $${(price * weight).toFixed(2)} to buy ${weight.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
solve("orange", 2500, 1.8);
solve("apple", 1563, 2.35);
