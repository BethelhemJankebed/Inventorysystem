// Global inventory array
let inventory = [];

// 1. Add Product
function addProduct(id, name, price, quantity) {
  let product = {
    id: id,
    name: name,
    price: price,
    quantity: quantity
  };
  inventory.push(product);
  console.log(`${name} added!`);
}


// 2. Remove Product
function removeProduct(id) {
  // TODO: queen odede
}

// 3. Update Stock
function updateStock(id, newQuantity) {
  if (newQuantity < 0) {
    console.log("Error: Quantity cannot be negative.");
    return;
  }
 
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

// 4. Generate Report
function generateReport() {
  // TODO: starmomo
}

//  SAMPLE USAGE / TESTING 
addProduct("P001", "Notebook", 2, 20);
addProduct("P002", "Pen", 1, 50);
addProduct("P003", "Stapler", 7, 5);

updateStock("P001", 25);
removeProduct("P002");

generateReport();
