function findWaldo(arr, found) {
  arr.forEach(function(i) {
    if ( i === "Waldo") {
      found(arr);   // execute callback
      } 
    }
  )
}


function actionWhenFound(arr) {
  var location = arr.indexOf("Waldo")
  console.log("Found him at:", location);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

