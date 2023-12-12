function sumTable() {
  let table = document.getElementsByTagName("table")[0];
  let sum = 0;
  let rows = table.rows;
  for (let i = 1; i < rows.length; i++) {
    sum += Number(rows[i].cells[1].innerHTML);
  }
  document.getElementById("sum").textContent = sum;
}
