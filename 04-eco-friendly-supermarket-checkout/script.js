// Array

function checkout(scannedItems, basketItems, mysteryItem) {

   const secretItem = "Eco-Tote Bag";
   const combinedItems = scannedItems.concat(basketItems);
   
   if (combinedItems.includes(mysteryItem)) {
      combinedItems.unshift(secretItem);
   }

   return combinedItems.join(", ");

}

console.log(checkout(["Shampoo", "Soap"], ["Scrub", "Oil", "Diswashing Liquid"], "Diswashing Liquid"));
console.log(checkout(["Apples", "Milk"], ["Bread", "Eggs"], "Apples"));
console.log(checkout(["Apples", "Milk"], ["Bread", "Eggs"], "Bananas"));