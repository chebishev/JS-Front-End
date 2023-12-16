function solve(input) {
  baristasCount = Number(input.shift());
  let baristas = {};

  for (let i = 0; i < baristasCount; i++) {
    let [name, shift, skills] = input.shift().split(" ");
    baristas[name] = { shift: shift, skills: skills.split(",") };
  }

  while (input.length > 0) {
    currentRow = input.shift();
    if (currentRow === "Closed") {
      break;
    }

    currentTask = currentRow.split(" / ");
    currentCommand = currentTask.shift();
    currentBarista = currentTask.shift();

    switch (currentCommand) {
      case "Prepare":
        let [shift, coffeeType] = currentTask;
        if (
          baristas[currentBarista]["shift"] === shift &&
          baristas[currentBarista]["skills"].includes(coffeeType)
        ) {
          console.log(
            `${currentBarista} has prepared a ${coffeeType} for you!`
          );
        } else {
          console.log(
            `${currentBarista} is not available to prepare a ${coffeeType}.`
          );
        }
        break;
      case "Change Shift":
        let newShift = currentTask.shift();
        baristas[currentBarista]["shift"] = newShift;
        console.log(`${currentBarista} has updated his shift to: ${newShift}`);
        break;
      case "Learn":
        let newCoffeeType = currentTask.shift();
        if (!baristas[currentBarista]["skills"].includes(newCoffeeType)) {
            baristas[currentBarista]["skills"].push(newCoffeeType);
            console.log(`${currentBarista} has learned a new coffee type: ${newCoffeeType}.`);
        }else{
            console.log(`${currentBarista} knows how to make ${newCoffeeType}.`);
        }
        break;
    }
  }
  for (let barista in baristas) {
    console.log(`Barista: ${barista}, Shift: ${baristas[barista]["shift"]}, Drinks: ${baristas[barista]["skills"].join(", ")}`);
  }
}
solve([
  "3",

  "Alice day Espresso,Cappuccino",

  "Bob night Latte,Mocha",

  "Carol day Americano,Mocha",

  "Prepare / Alice / day / Espresso",

  "Change Shift / Bob / night",

  "Learn / Carol / Latte",

  "Learn / Bob / Latte",

  "Prepare / Bob / night / Latte",

  "Closed",
]);
solve([
  "4",
  "Alice day Espresso,Cappuccino",
  "Bob night Latte,Mocha",
  "Carol day Americano,Mocha",
  "David night Espresso",
  "Prepare / Alice / day / Espresso",
  "Change Shift / Bob / day",
  "Learn / Carol / Latte",
  "Prepare / Bob / night / Latte",
  "Learn / David / Cappuccino",
  "Prepare / Carol / day / Cappuccino",
  "Change Shift / Alice / night",
  "Learn / Bob / Mocha",
  "Prepare / David / night / Espresso",
  "Closed",
]);
