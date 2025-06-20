const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let numb = fruits.get("apples");
document.getElementById("demo").innerHTML = "There are " + numb + " apples.";

// OUTPUT : There are 500 apples.
// The Map object holds key-value pairs and remembers the original insertion order of the keys.e