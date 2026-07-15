# The Challenge: The Grocery Inventory Audit
You are writing a script for a grocery store warehouse. The store has an array of objects representing items in stock. You need to loop through the inventory to find which items are running dangerously low and calculate the total cost needed to restock them.

## Your Task
Write a function named auditInventory that takes one parameter:

1. inventory (an array of objects)

   Each item object in the array looks like this:
   
   ```js
   JavaScript
   { name: "Apples", stock: 4, restockPrice: 1.50 }
   ```
## The Rules
1. The Low Stock Threshold: An item is considered "low stock" if its stock is less than 5.

2. Track the Data: Your loop needs to look at every item in the inventory array:

   - If an item is low stock, add its name to a list of items to buy.

   - Calculate how much it costs to buy one of each low stock item by adding up their restockPrice values.

3. Return a Summary Object: The function should return a brand-new object with two properties:

   - itemsToBuy: An array containing the names of the low-stock items.

   - totalRestockCost: The sum of the prices of those items.

## Starter Code
```js
const warehouseStock = [
   { name: "Apples", stock: 3, restockPrice: 1.50 },
   { name: "Milk", stock: 12, restockPrice: 3.00 },
   { name: "Bread", stock: 2, restockPrice: 2.00 },
   { name: "Eggs", stock: 15, restockPrice: 4.00 },
   { name: "Bananas", stock: 0, restockPrice: 0.80 }
];

function auditInventory(inventory) {
   // Your code goes here
   
}

// --- Test Case ---
console.log(auditInventory(warehouseStock));
/* 
Should print an object exactly like this:
{
  itemsToBuy: ["Apples", "Bread", "Bananas"],
  totalRestockCost: 4.3
}
*/
```

## Hints
- You can use any loop you like! A standard for loop (for (let i = 0; i < inventory.length; i++)) or a for...of loop work brilliantly here.

- Don't forget to initialize your accumulation variables (an empty array for the names, and 0 for the total price) before the loop starts.

- Inside the loop, remember how to access properties of the current object (e.g., inventory[i].stock or item.stock).