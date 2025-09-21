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
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      console.log(${inventory[i].name} removed!);
      inventory.splice(i, 1); // remove 1 item at index i
      return;
    }
  }
  console.log(Product not found.);
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
function generatereport() {
    let total = 0;
    let lowStockItems = [];

    for (let i = 0; i < shelf.length; i++) {
        total += shelf[i].price + shelf[i].quantity;

        if (shelf[i].quantity < 5) {
            lowStockItems.push(${shelf[i].name} (${shelf[i].quantity} left));
        }
    }

    console.log("Total report:", total);

    if (lowStockItems.length > 0) {
        console.log("Low-stock items:");
        for (let i = 0; i < lowStockItems.length; i++) {
            console.log("- " + lowStockItems[i]);
        }
    } else {
        console.log("All items are well stocked.");
    }
}

//  SAMPLE USAGE / TESTING 
addProduct("P001", "Notebook", 2, 20);
addProduct("P002", "Pen", 1, 50);
addProduct("P003", "Stapler", 7, 5);

updateStock("P001", 25);
removeProduct("P002");

generateReport();
