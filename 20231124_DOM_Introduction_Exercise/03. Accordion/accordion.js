function toggle() {
  button = document.getElementsByClassName("button");
  additionalText = document.getElementById("extra");

  if (button[0].innerHTML == "More") {
    additionalText.style.display = "block";
    button[0].innerHTML = "Less";
  } else {
    additionalText.style.display = "none";
    button[0].innerHTML = "More";
  }
}
