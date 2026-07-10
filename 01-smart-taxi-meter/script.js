function calculateTaxiFare(distance, isTrafficHeavy, passengerName) {

   let totalCost;
   const basePickUpFee = 5.00;
   const perMileCost = 2.50;
   const trafficSurgeRate = 10.00;

   const serviceCost = basePickUpFee + (distance * perMileCost);

   if (isTrafficHeavy) {
      totalCost = serviceCost + trafficSurgeRate;
      return `Hello ${passengerName}! Your total fare is ${totalCost.toFixed(2)}`;
   } else {
      totalCost = serviceCost;
      return `Hello ${passengerName}! Your total fare is ${totalCost.toFixed(2)}`;
   }

}

console.log(calculateTaxiFare(4, false, "Alex"));
console.log(calculateTaxiFare(10, true, "Sam"));