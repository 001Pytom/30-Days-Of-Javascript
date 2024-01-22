// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let userAge = window.prompt("Enter Your Age:");
userAge >= 18
  ? console.log("you are allowed to drive ")
  : console.log(`you are left with ${18 - userAge} years to drive`);

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = window.prompt("enter number lets see if it is even");
if (num % 2 === 0) {
  console.log(`${num} is aneven number `);
}

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let score = 100;

if (score >= 80 && score <= 100) {
  console.log("A");
} else if (score >= 70 && score < 80) {
  console.log("B");
} else if (score >= 60 && score < 70) {
  console.log("C");
} else if (score >= 50 && score < 60) {
  console.log("D");
} else if (score >= 0 && score < 50) {
  console.log("E");
} else {
  console.log("Invalid score");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
const month = "September";

if (month === "September" || month === "October" || month === "November") {
  console.log(`For the month ${month}, the season is Autumn`);
} else if (
  month === "December" ||
  month === "January" ||
  month === "February"
) {
  console.log(`For the month ${month}, the season is Winter`);
} else if (month === "March" || month === "April" || month === "May") {
  console.log(`For the month ${month}, the season is Spring`);
} else if (month === "June" || month === "July" || month === "August") {
  console.log(`For the month ${month}, the season is Summer`);
} else {
  console.log("Invalid month");
}

// next question
const userInput = prompt("Enter the name of the month:");

const month2 = userInput.toLowerCase();

if (
  month2 === "january" ||
  month2 === "march" ||
  month2 === "may" ||
  month2 === "july" ||
  month2 === "august" ||
  month2 === "october" ||
  month2 === "december"
) {
  console.log(`${month2} has 31 days.`);
} else if (
  month2 === "april" ||
  month2 === "june" ||
  month2 === "september" ||
  month2 === "november"
) {
  console.log(`${month2} has 30 days.`);
} else if (month2 === "february") {
  console.log(
    `${month2} has 28 or 29 days, depending on whether it's a leap year.`
  );
} else {
  console.log("Invalid month.");
}
