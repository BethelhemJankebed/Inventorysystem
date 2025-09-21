// Global inventory array
let inventory = [];

// 1. Add Product
function addProduct(id, name, price, quantity) {
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
}

// 2. Remove Product

function removeProduct(id) {
  let found = false;

  for (let i = 0; i < inventory.length; i++) {
    
    if (inventory[i].id === id) {
      inventory.splice(i, 1); // remove 1 item at index i
      found = true;
      console.log(`Product with ID ${id} removed successfully.`);
      break;
    }
  }

  if (!found) {
    console.log(`Product with ID ${id} not found.`)
  }
}


// 3. Update Stock
function updateStock(id, newQuantity) {
  // TODO: senayt
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