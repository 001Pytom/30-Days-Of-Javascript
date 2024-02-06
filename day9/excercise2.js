// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let productss = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

let totalPrice = productss
  .filter(
    (product) => typeof product.price === "number" && !isNaN(product.price)
  )
  .map((product) => product.price)
  .reduce((acc, price) => acc + price, 0);

console.log(totalPrice);
// Find the sum of price of products using only reduce reduce(callback))
let sumPrice = productss.reduce((acc, product) => {
  if (typeof product.price === "number" && !isNaN(product.price)) {
    return acc + product.price;
  }
  return acc;
}, 0);

console.log(sumPrice);

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const countriesss = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "Iceland",
  "Pakistan",
  "India",
  "Thailand",
  "Afghanistan",
];
const categorizeCountries = (pattern) => {
  return countriesss.filter((country) =>
    country.toLowerCase().includes(pattern.toLowerCase())
  );
};

console.log(categorizeCountries("land"));
console.log(categorizeCountries("ia"));
console.log(categorizeCountries("island"));
console.log(categorizeCountries("stan"));
