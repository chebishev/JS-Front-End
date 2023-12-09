function editElement(htmlElement, oldText, newText) {
  while (htmlElement.textContent.includes(oldText)) {
    htmlElement.textContent = htmlElement.textContent.replace(oldText, newText);
  }
}
