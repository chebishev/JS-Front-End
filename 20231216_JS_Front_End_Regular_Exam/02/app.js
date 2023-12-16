window.addEventListener("load", solve);

function solve() {
  let expenseInput = document.getElementById("expense");
  let amountInput = document.getElementById("amount");
  let dateInput = document.getElementById("date");
  let addBtn = document.getElementById("add-btn");

  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let expense = expenseInput.value;
    let amount = Number(amountInput.value);
    let date = dateInput.value;

    if (expense === "" || amount === "" || date === "") {
      return;
    }

    let ul = document.getElementById("preview-list");

    let li = document.createElement("li");
    li.className = "expense-item";

    let article = document.createElement("article");

    let pType = document.createElement("p");
    pType.textContent = `Type: ${expense}`;

    let pAmount = document.createElement("p");
    pAmount.textContent = `Amount: ${amount}$`;

    let pDate = document.createElement("p");
    pDate.textContent = `Date: ${date}`;

    article.appendChild(pType);
    article.appendChild(pAmount);
    article.appendChild(pDate);

    let div = document.createElement("div");
    div.className = "buttons";

    let editBtn = document.createElement("button");
    editBtn.classList.add("btn");
    editBtn.classList.add("edit");
    editBtn.textContent = "edit";

    editBtn.addEventListener("click", () => {
      expenseInput.value = expense;
      amountInput.value = amount;
      dateInput.value = date;

      ul.removeChild(li);
      addBtn.disabled = false;
    });

    let okBtn = document.createElement("button");
    okBtn.classList.add("btn");
    okBtn.classList.add("ok");
    okBtn.textContent = "ok";

    okBtn.addEventListener("click", () => {
      ul.removeChild(li);

      let ulExpenses = document.getElementById("expenses-list");
      li.removeChild(div);
      ulExpenses.appendChild(li);
      addBtn.disabled = false;
    });

    div.appendChild(editBtn);
    div.appendChild(okBtn);

    li.appendChild(article);
    li.appendChild(div);

    ul.appendChild(li);

    expenseInput.value = "";
    amountInput.value = "";
    dateInput.value = "";
    addBtn.disabled = true;
  });

  let clearBtn = document.querySelector(".btn.delete");

  clearBtn.addEventListener("click", () => {
    location.reload();
  });
}
