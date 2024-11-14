//Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.
//A grocery object has a product, a quantity and a price

function getTotalPrice(groceries) {
  return groceries.reduce(function (totalPrice, groceryItem) {
    return totalPrice + groceryItem.quantity * groceryItem.price;
  }, 0);
}

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ])
);
