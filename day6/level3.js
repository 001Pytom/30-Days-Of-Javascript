// Copy countries array(Avoid mutation)
const countriess = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesCopy = [...countriess];
console.log(countriesCopy);

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const copiedCountriess = [...countriess];
const sortedCountries = copiedCountriess.sort();
console.log(sortedCountries);
console.log(countriess);

// Extract all the countries contain the word 'land' from the countries array and print it as arrayconst countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];

const countriesWithLand = [];
for (let i = 0; i < countriess.length; i++) {
  const country = countriess[i].toLowerCase();

  if (country.includes("land")) {
    countriesWithLand.push(countriess[i]);
  }
}
console.log(countriesWithLand);

// Reverse the original array and capitalize each country
const reversedAndCapitalizedCountries = countriess
  .reverse()
  .map((country) => country.toUpperCase());

console.log(reversedAndCapitalizedCountries);
