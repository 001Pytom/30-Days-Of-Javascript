const countries = ["Finland", "Sweden", "Norway"];

// create an empty set
let newSet = new Set();
console.log(newSet);
// Create a set containing 0 to 10 using loop
let numberSet = new Set();
for (let i = 0; i < 11; i++) {
  numberSet.add(i);
}
console.log(numberSet);
// Remove an element from a set
numberSet.delete(10);
console.log(numberSet);
// Clear a set
numberSet.clear();
// Create a set of 5 string elements from array
let stringArray = ["apple", "banana", "orange", "grape", "kiwi"];
let stringSet = new Set(stringArray);
console.log(stringSet);
// Create a map of countries and number of characters of a country
countries2 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const map = new Map(countries2);
console.log(map);
