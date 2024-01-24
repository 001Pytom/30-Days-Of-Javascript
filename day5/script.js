// Declare an empty array;
let arr = [];
console.log(arr);

// Declare an array with more than 5 number of elements
let moreThan5 = Array(6);
console.log(moreThan5);
// or
const numbersArray = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(numbersArray);

// Find the length of your array
console.log(moreThan5.length);
// Get the first item, the middle item and the last item of the array
let firstItem = numbersArray[0];
let middleItem = numbersArray[Math.floor(numbersArray.length / 2)];
let lastItem = numbersArray[numbersArray.length - 1];
console.log(firstItem, middleItem, lastItem);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, true, "hello", 1.2, false, "yes"];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
let lastCompany = itCompanies[itCompanies.length - 1];
console.log(firstCompany, middleCompany, lastCompany);
// cChange each company name to uppercase one by one and print them out
console.log(
  firstCompany.toUpperCase(),
  middleCompany.toUpperCase(),
  lastCompany.toUpperCase()
);
// Sort the array using sort() method
console.log(itCompanies.sort());
// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));
