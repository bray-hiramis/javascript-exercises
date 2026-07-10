# The Challenge: The Eco-Friendly Supermarket Checkout
You are writing the software for a grocery store checkout lane. The store is running a promotion: if a customer buys a "mystery item" of the day, they get a free eco-friendly tote bag! Also, the store needs to combine their scanned items with any items they already had in their basket.

## Your Task
- Write a function named checkout that takes three parameters:

1. scannedItems (an array of strings representing items just scanned at the register)

2. basketItems (an array of strings representing items already in the customer's shopping basket)

3. mysteryItem (a string representing the special promo item of the day)

## The Rules
- Combine the Lists: Combine scannedItems and basketItems into one single array containing all the items. (Put the scanned items first, followed by the basket items).

- Check for the Mystery Item: Check if the mysteryItem is anywhere inside that combined list of items.

- Apply the Reward: * If the mystery item is in their list, add "Eco-Tote Bag" to the very beginning of the combined array.

- If it is not in their list, do not add the bag.

- Return the final combined array.

## Test Cases
```js
// Test 1: Customer bought the mystery item ("Apples")
console.log(checkout(["Apples", "Milk"], ["Bread", "Eggs"], "Apples"));
// Should print: ["Eco-Tote Bag", "Apples", "Milk", "Bread", "Eggs"]

// Test 2: Customer did NOT buy the mystery item ("Bananas")
console.log(checkout(["Apples", "Milk"], ["Bread", "Eggs"], "Bananas"));
// Should print: ["Apples", "Milk", "Bread", "Eggs"]
```