# The Challenge: The Video Game Inventory
You are developing the inventory system for a role-playing game (RPG). A character has an object representing their stats and current gear. You need to write a function that can update this inventory when a player equips a new piece of armor.

## Your Task
- Write a function named equipArmor that takes three parameters:

1. character (an object containing character data)

2. slot (a string representing the armor slot, e.g., "chest" or "head")

3. newArmorName (a string representing the name of the new armor piece)

## The Rules
- Check if the slot exists: The function needs to look inside the character's equipment object. If the slot provided ("chest", "head", etc.) doesn't exist in their equipment, return:
   ```js
   "Invalid equipment slot."
   ```
- Equip the new armor: If the slot does exist, look at what they are currently wearing in that slot.

   - Save the name of the old armor into a variable.

   - Update the slot with the newArmorName.

- Boost the stats: Every time armor is changed, the character's defense stat (found inside their stats object) increases by 5 points.

- Return a summary string exactly like this:
   ```js
   "Unequipped [Old Armor] and equipped [New Armor]. Defense increased to [New Defense]!"
   ```
## Test Case
```js
// Test 1: Equipping a valid slot
console.log(equipArmor(player1, "chest", "Steel Plate"));
// Should print: "Unequipped Iron Mail and equipped Steel Plate. Defense increased to 20!"

// Test 2: Trying to equip an invalid slot
console.log(equipArmor(player1, "wings", "Dragon Wings"));
// Should print: "Invalid equipment slot."
```