let inventory = [];

function addProduct(id, name, price, quantity) {
  inventory.push({ id, name, price, quantity });
}

function updateStock(id, newQuantity) {
  //checking the newQuantity is not negative
  if (newQuantity < 0) {
    console.log("Invalid quanitity.");
    return;
  }

  //find the product
  for (let i = 0; i < inventory.length; i++) {
    let product = inventory[i];

    if (product.id === id) {
      product.quantity = newQuantity;

      console.log("Stock updated: " + product.name + " now has " + newQuantity + " items.");
      return;
    }
  }

  console.log("Product with ID " + id + " not found.");
}

addProduct("P001", "Notebook", 2.5, 20);
addProduct("P002", "Pen", 0.5, 50);
addProduct("P003", "Stapler", 7, 5);

updateStock("P001", 25);
updateStock("P002", -5);
updateStock("P009", 10);

console.log(inventory);
