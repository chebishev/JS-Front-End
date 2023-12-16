const baseUrl = "http://localhost:3030/jsonstore/tasks/";

const loadMeals = document.getElementById("load-meals");
const todayMeals = document.getElementById("list");

const addMeal = document.getElementById("add-meal");
addMeal.addEventListener("click", addNewMeal);

let currentMealId = "";

const editMeal = document.getElementById("edit-meal");
editMeal.addEventListener("click", editMealHandler);

loadMeals.addEventListener("click", loadMealsHandler);

const foodInput = document.getElementById("food");
const timeInput = document.getElementById("time");
const caloriesInput = document.getElementById("calories");

async function loadMealsHandler() {
  const response = await fetch(baseUrl);
  const mealsData = await response.json();
  console.log(mealsData);

  todayMeals.innerHTML = "";

  for (const meal of Object.values(mealsData)) {
    const h2Food = document.createElement("h2");
    h2Food.textContent = meal.food;

    const h3Time = document.createElement("h3");
    h3Time.textContent = meal.time;

    const h3Calories = document.createElement("h3");
    h3Calories.textContent = meal.calories;

    const divButtons = document.createElement("div");
    divButtons.id = "meal-buttons";

    const changeButton = document.createElement("button");
    changeButton.className = "change-meal";
    changeButton.textContent = "Change";

    changeButton.addEventListener("click", async () => {
      foodInput.value = meal.food;
      timeInput.value = meal.time;
      caloriesInput.value = meal.calories;
      currentMealId = meal._id;

      addMeal.setAttribute("disabled", "disabled");
      editMeal.removeAttribute("disabled");

      todayMeals.removeChild(mealsDiv);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-meal";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", async () => {
      currentMealId = meal._id;

      await fetch(`${baseUrl}${currentMealId}`, {
        method: "DELETE",
      });

      loadMealsHandler();
    });

    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteBtn);

    const mealsDiv = document.createElement("div");
    mealsDiv.className = "meal";

    mealsDiv.appendChild(h2Food);
    mealsDiv.appendChild(h3Time);
    mealsDiv.appendChild(h3Calories);
    mealsDiv.appendChild(divButtons);

    todayMeals.appendChild(mealsDiv);
  }
}

async function addNewMeal() {
  const isValid =
    foodInput.value != "" && timeInput.value != "" && caloriesInput.value != "";

  if (isValid) {
    const newMealObject = {
      food: foodInput.value,
      time: timeInput.value,
      calories: caloriesInput.value,
    };

    await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMealObject),
    });

    foodInput.value = "";
    timeInput.value = "";
    caloriesInput.value = "";

    loadMealsHandler();
  }
}

async function editMealHandler() {
  const editMealObject = {
    food: foodInput.value,
    time: timeInput.value,
    calories: caloriesInput.value,
    _id: currentMealId,
  };

  await fetch(`${baseUrl}${currentMealId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editMealObject),
  })

  addMeal.removeAttribute("disabled");
  editMeal.setAttribute("disabled", "disabled");

  loadMealsHandler();
}
