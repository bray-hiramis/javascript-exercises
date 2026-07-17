# The Challenge: The Smart Fleet Manager
Imagine you are managing the digital system for a delivery company. You have an array of "vehicle" objects, and you need to generate a dynamic maintenance report.

## Your Task
Write a function named <code>generateMaintenanceReport</code> that takes two parameters:

1. <code>fleet</code> (an array of vehicle objects)

2. <code>currentYear</code> (a number, e.g., <code>2026</code>)

Each vehicle object looks like this:
```js
JavaScript
{ 
  id: "V101", 
  model: "Ford Transit", 
  yearBuilt: 2020, 
  mileage: 45000, 
  needsOilChange: true 
}
```

## The Rules
Your loop needs to look at every vehicle in the <code>fleet</code> array and evaluate them based on three separate conditions:

1. Calculate Age: Determine the age of the vehicle by subtracting its <code>yearBuilt</code> from the <code>currentYear</code>.

2. Flag for Service: A vehicle is flagged as <code>"URGENT"</code> if it meets at least one of these conditions:

   - It has a <code>mileage</code> greater than or equal to <code>50000</code>.

   - Its <code>age</code> is greater than or equal to <code>5</code> years.

   - Its <code>needsOilChange</code> property is <code>true</code>.

Otherwise, if it doesn't meet any of those, it is flagged as <code>"OK"</code>.

3. Track and Package the Data:

   - Count the total number of vehicles flagged as <code>"URGENT"</code>.

   - Create a new array containing personalized alert strings for only the urgent vehicles formatted exactly like this:

   <code>"Vehicle [id] ([model]) requires urgent service!"</code>

## Return Value
The function should return a summary object with two properties:

- <code>urgentCount</code>: The total number of urgent vehicles (a number).

- <code>serviceAlerts</code>: The array of alert strings you built.

## Starter Code
```js
const companyFleet = [
   { id: "V101", model: "Ford Transit", yearBuilt: 2022, mileage: 30000, needsOilChange: false },
   { id: "V102", model: "Ram ProMaster", yearBuilt: 2019, mileage: 55000, needsOilChange: false },
   { id: "V103", model: "Chevy Express", yearBuilt: 2024, mileage: 12000, needsOilChange: true },
   { id: "V104", model: "Mercedes Sprinter", yearBuilt: 2023, mileage: 25000, needsOilChange: false }
];

function generateMaintenanceReport(fleet, currentYear) {
   // Your code goes here
   
}

// --- Test Case ---
console.log(generateMaintenanceReport(companyFleet, 2026));
/* 
Should print an object exactly like this:
{
  urgentCount: 2,
  serviceAlerts: [
    "Vehicle V102 (Ram ProMaster) requires urgent service!",
    "Vehicle V103 (Chevy Express) requires urgent service!"
  ]
}
*/
```
## Hints
- Think about using the logical OR operator (<code>||</code>) to easily check if any of the three urgent conditions are met.

- Keep using the separation of concerns you mastered in the loop challenge: accumulate your counts and arrays inside the loop first, then build your final return object at the very end.