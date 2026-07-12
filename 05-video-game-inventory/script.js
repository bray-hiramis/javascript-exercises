// Objects

const player1 = {
   name: "Eldrin",
   stats: {
      health: 100,
      defense: 15
   },
   equipment: {
      head: "Leather Cap",
      chest: "Iron Mail",
      legs: "Cloth Pants"
   }
};

function equipArmor(character, slot, newArmorName) {

   const hasSlot = Object.hasOwn(character["equipment"], slot);

   switch(hasSlot) {
      case false:
         return "Invalid equipment slot."
      case true:
         const oldArmorName = character["equipment"][slot];
         character["equipment"][slot] = newArmorName;
         character.stats.defense += 5;
         return `Unequipped "${oldArmorName}" and equipped "${newArmorName}". Defense increased to ${character.stats.defense}!`;
   }

}
console.log(equipArmor(player1, "hands", "Mjolnir"));
console.log(equipArmor(player1, "head", "Golem Mask"));