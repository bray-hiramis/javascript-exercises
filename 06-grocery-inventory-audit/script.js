// Loops

const warehouseStock = [
   { name: "Apples", stock: 3, restockPrice: 1.50 },
   { name: "Milk", stock: 12, restockPrice: 3.00 },
   { name: "Bread", stock: 2, restockPrice: 2.00 },
   { name: "Eggs", stock: 15, restockPrice: 4.00 },
   { name: "Bananas", stock: 0, restockPrice: 0.80 }
];

function auditInventory(inventory) {

   const itemsToBuy = {};
   const itemName = [];
   let totalRestockCost = 0;

   for (let i = 0; i < inventory.length; i++) {

      if (inventory[i].stock < 5) {
         totalRestockCost += inventory[i].restockPrice;
         itemName.push(inventory[i].name);
      }
      
   }

   itemsToBuy.itemsToBuy = itemName;
   itemsToBuy.totalRestockCost = parseFloat(totalRestockCost.toFixed(2));

   return itemsToBuy;

}

console.log(auditInventory(warehouseStock));