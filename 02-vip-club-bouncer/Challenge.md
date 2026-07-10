# The Challenge: The VIP Club Bouncer
You are writing the entry-validation software for an exclusive club. The club has strict rules about who can get in, who gets in for free, and who gets rejected.

## Your Task
- Write a function named checkClubEntry that takes three parameters:

1. <code>age</code> (a number)

2. <code>isOnGuestList</code> (a boolean)

3. <code>cashOnHand</code> (a number)

## The Entry Rules
- Age Limit: If the person is under 21, they are immediately rejected. The function should return:
   ```js
   "Access Denied: Too young!"
   ```
- The Guest List: If they are 21 or older and isOnGuestList is true, they get in for free! The function should return:
   ```js
   "Welcome! Enjoy the VIP lounge."
   ```
- Cover Charge: If they are 21 or older but not on the guest list, they have to pay a $20 cover charge.

   - If they have enough cashOnHand (20 or more), subtract 20 from their cash and return how much change they have left:
      ```js
      "Welcome! Your change is $[change]."
      ```
   - If they do not have enough cash (less than 20), they are rejected. Return:
      ```js
      "Access Denied: Insufficient funds!"
      ```