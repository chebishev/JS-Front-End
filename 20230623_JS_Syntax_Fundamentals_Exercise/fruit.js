function solve(fruit, weight, price){
    weight /= 1000;
    let total = price * weight;
    console.log(`I need $${total.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);