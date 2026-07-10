# The Challenge: The Smart Taxi Meter
Imagine you are writing the software for a taxi company's new digital meter. You need to create a function that calculates the total fare for a ride based on a few conditions.

## Your Task
- Write a function named calculateTaxiFare that takes three parameters:

- distance (a number representing miles driven)

- isTrafficHeavy (a boolean indicating if the taxi got stuck in traffic)

- passengerName (a string with the rider's name)

## The Pricing Rules
- There is a base pickup fee of $5.00.

- Every mile driven costs $2.50.

- If traffic is heavy (isTrafficHeavy is true), add a flat &dollar;10.00 traffic surcharge. If it's false, add &dollar;0.00.

- The function should return a personalized greeting and the total price as a string formatted exactly like this:

- "Hello [Passenger Name]! Your total fare is $[Total Price]."

## Test Case

```js
// --- Test Cases to check your work ---
```

```js
console.log(calculateTaxiFare(4, false, "Alex")); 
// Should print: "Hello Alex! Your total fare is $15."
```
```js
console.log(calculateTaxiFare(10, true, "Sam")); 
// Should print: "Hello Sam! Your total fare is $40."
```