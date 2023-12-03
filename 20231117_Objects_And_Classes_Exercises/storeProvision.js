function printProductsAndQuantities(currentStock, productsForDelivery) {
  const storeProvision = {};

  for (let i = 0; i < currentStock.length - 1; i += 2) {
    const product = currentStock[i];
    const quantity = Number(currentStock[i + 1]);
    storeProvision[product] = quantity;
  }

  for (let i = 0; i < productsForDelivery.length - 1; i += 2) {
    const product = productsForDelivery[i];
    const quantity = Number(productsForDelivery[i + 1]);
    if (storeProvision.hasOwnProperty(product)) {
      storeProvision[product] += quantity;
    } else {
      storeProvision[product] = quantity;
    }
  }

  Object.entries(storeProvision).forEach(([product, quantity]) => {
    console.log(`${product} -> ${quantity}`);
  });
}
printProductsAndQuantities(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
printProductsAndQuantities(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
