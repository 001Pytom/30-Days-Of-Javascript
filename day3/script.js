// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "John";
let lastName = "Doe";
let country = "United States";
let city = "New York";
let age = 30;
let isMarried = false;
let year = 2022;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
// Check if type of '10' is equal to 10
let type = typeof 10;
type === 10 ? console.log(true) : console.log(false);
// Check if parseInt('9.8') is equal to 10
let check = parseInt("9.8");
console.log(typeof check);
console.log(typeof 10);
check === 10 ? console.log(true) : console.log(false);
// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// What is the year today?
let day = new Date();
let yearToday = day.getFullYear();
console.log(yearToday);

// What is the month today as a number?
console.log(day.getMonth() + 1);
// What is the date today?
console.log(day.getDate());
// What is the day today as a number?
console.log(day.getDay());
// What is the hours now?
console.log(day.getHours());
// What is the minutes now?
console.log(day.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.

