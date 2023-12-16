function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let restaurants = {};

    let input = document.querySelector("textarea").value;
    let lines = JSON.parse(input);
    for (let i = 0; i < lines.length; i++) {
      let curentRestaurant = lines[i].split(" - ");
      let restaurant = curentRestaurant[0];
      let personal = curentRestaurant[1].split(", ");
      let bestSalary = 0;
      if (!restaurants.hasOwnProperty(restaurant)) {
        restaurants[restaurant] = {
          workers: {},
          avgSalary: 0,
          bestSalary: 0,
        };
      }
      for (let worker of personal) {
        let [name, salary] = worker.split(" ");
        salary = Number(salary);
        restaurants[restaurant].workers[name] = salary;
        restaurants[restaurant].avgSalary += salary;

        if (salary > restaurants[restaurant].bestSalary) {
          restaurants[restaurant].bestSalary = salary.toFixed(2);
        }
      }
      restaurants[restaurant].avgSalary = (
        restaurants[restaurant].avgSalary / personal.length
      ).toFixed(2);
    }
    let bestRestaurant = "";
    let avgSalary = 0;
    for (let restaurant in restaurants) {
      if (restaurants[restaurant].avgSalary > avgSalary) {
        bestRestaurant = restaurant;
      }
    }
    let winnerRestaurant = document.querySelector("#bestRestaurant p");
    winnerRestaurant.textContent = `Name: ${bestRestaurant} Average Salary: ${restaurants[bestRestaurant].avgSalary} Best Salary: ${restaurants[bestRestaurant].bestSalary}`;
    bestWorkers = restaurants[bestRestaurant].workers;
    sortedWorkers = [];
    for (let worker in bestWorkers) {
      sortedWorkers.push(worker, bestWorkers[worker]);
    }
    sortedWorkers.sort((a, b) => b[1] - a[1]);
    outputWorkers = "";
    for (let i = 0; i < sortedWorkers.length; i += 2) {
      outputWorkers += `Name: ${sortedWorkers[i]} With Salary: ${
        sortedWorkers[i + 1]
      } `;
    }
    let winnerWorkers = document.querySelector("#workers p");
    winnerWorkers.textContent = outputWorkers;
  }
}
