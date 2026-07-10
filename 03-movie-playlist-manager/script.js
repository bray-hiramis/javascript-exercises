// Arrays

function manageWatchlist(watchList, action, movieTitle) {


   const add = "ADD";
   const removeFirst = "REMOVE_FIRST";
   const replaceLast = "REPLACE_LAST";

   switch (action) {
      case add:
         watchList.push(movieTitle);
         break;
      case removeFirst:
         watchList.shift();
         break;
      case replaceLast:
         // watchList.splice(watchList.length - 1, 1, movieTitle);
         watchList[watchList.length - 1] = movieTitle; // more efficient than splice() method
         break;
      default:
         console.log("Invalid action");
   }

   return watchList;

}

console.log(manageWatchlist(["Inception", "The Matrix"], "ADD", "Interstellar"));
console.log(manageWatchlist(["Inception", "The Matrix", "Interstellar"], "REMOVE_FIRST"));
console.log(manageWatchlist(["The Matrix", "Interstellar"], "REPLACE_LAST", "Avatar"));