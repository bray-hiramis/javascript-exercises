# The Challenge: The Movie Playlist Manager
Imagine you are building a feature for a streaming app that lets users manage their movie watchlist. You need to write a function that updates the list based on user actions.

## Your Task
- Write a function named manageWatchlist that takes three parameters:

   1. watchlist (an array of strings representing movie titles)

   2. action (a string that can be either "ADD", "REMOVE_FIRST", or "REPLACE_LAST")

   3. movieTitle (a string representing a movie title, used for certain actions)

## The Rules
Depending on what the action string is, your function should manipulate the watchlist array:

- If action is "ADD": Add the movieTitle to the end of the array.

- If action is "REMOVE_FIRST": Remove the very first movie from the array.

- If action is "REPLACE_LAST": Replace the very last movie in the array with the new movieTitle.

- After performing the action, the function should return the updated array.

## Test Case
```js
// Test 1: Adding a movie to the end
console.log(manageWatchlist(["Inception", "The Matrix"], "ADD", "Interstellar"));
// Should print: ["Inception", "The Matrix", "Interstellar"]

// Test 2: Removing the first movie
console.log(manageWatchlist(["Inception", "The Matrix", "Interstellar"], "REMOVE_FIRST"));
// Should print: ["The Matrix", "Interstellar"]

// Test 3: Replacing the last movie
console.log(manageWatchlist(["The Matrix", "Interstellar"], "REPLACE_LAST", "Avatar"));
// Should print: ["The Matrix", "Avatar"]
```