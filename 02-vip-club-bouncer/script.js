function checkClubEntry(age, isOnGuestList, cashOnHand) {

   if (age < 21) {
      return "Access Denied: Too young!";
   } else if (age >= 21 && isOnGuestList) {
      return "Welcome! Enjoy the VIP lounge.";
   } else if (age >= 21 && !isOnGuestList) {
      if (cashOnHand >= 20) {
         const changeAmount = cashOnHand - 20;
         return `Welcome! Your change is ${changeAmount}.`;
      } else {
         return "Access Denied: Insufficient funds!";
      }
   }
   
}

console.log(checkClubEntry(19, true, 50));
console.log(checkClubEntry(25, true, 0));
console.log(checkClubEntry(22, false, 30));
console.log(checkClubEntry(30, false, 15));