// Explain the difference between forEach, map, filter, and reduce.
// Define a callback function before you use it in forEach, map, filter or reduce.
// Use forEach to console.log each country in the countries array.
const countriess = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
countries.forEach((country) => console.log(country));

// Use forEach to console.log each name in the names array.

names.forEach((name) => console.log(name));
// Use forEach to console.log each number in the numbers array.
numberss.forEach((number) => console.log(number));

// Use map to create a new array by changing each country to uppercase in the countries array.
let countriesToUpperCase = countriess.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);
// Use map to create an array of countries length from countries array.
let countriesLength = countriess.map((country) => country.length);
console.log(countriesLength);
// Use map to create a new array by changing each number to square in the numbers array
let numSquare = numberss.map((num) => num ** 2);
console.log(numSquare);
// Use filter to filter out countries containing land.
let countriesContainingLand = countriess.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);
// Use filter to filter out countries having six character.
let sixChr = countriess.filter((country) => country.length === 6);
console.log(sixChr);
// Use filter to filter out countries containing six letters and more in the country array.
let moreThanSixChr = countriess.filter((country) => country.length >= 6);
console.log(moreThanSixChr);

// Use filter to filter out country start with 'E';
let startWithE = countriess.filter((country) => country.startsWith("E"));
console.log(startWithE);
// Use filter to filter out only prices with values.
const validPrices = products.filter(
  (product) => typeof product.price === "number"
);
console.log(validPrices);
// Use reduce to sum all the numbers in the numbers array.
let summ = numberss.reduce((acc, cur) => acc + cur, 0);
console.log(summ);

// Use some to check if some names' length greater than seven in names array

let isSomeNameLongerThanSeven = names.some((name) => name.length > 7);
console.log(isSomeNameLongerThanSeven);
