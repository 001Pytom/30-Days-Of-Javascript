// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = window.prompt("enter base of triange:");
let height = window.prompt("enter height of triange:");
console.log(`The area of the triangle is ${0.5 * base * height}`);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = window.prompt("enter side a  of triange:");
let b = window.prompt("enter side b  of triange:");
let c = window.prompt("enter side c  of triange:");
console.log(`The perimeter of the triangle is ${a + b + c}`);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let x2 = 6;
let y1 = 2;
let y2 = 10;
console.log(`slope is equals to ${(y2 - y1) / (x2 - x1)}`);
// If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = "faatihat";
let lengthOfMyName = myName.length;
lengthOfMyName > 7
  ? console.log("your name is long")
  : console.log("your name is shrt");

//  Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let yearOfBirth = window.prompt("enter your year of birth:");
let userAge = 2024 - yearOfBirth;
userAge >= 18
  ? console.log("you are allowed to drive ")
  : console.log("sorry you cant drive");

//   Create a human readable time format using the Date time object

let readableTime = new Date();
// Create a human readable time format using the Date time object
let theYear = readableTime.getFullYear();
let theMonth = readableTime.getMonth();
let theDate = readableTime.getDate();
let theHours = readableTime.getHours();
let theMin = readableTime.getMinutes();
console.log(`${theYear}-${theMonth + 1}-${theDate} ${theHours}:${theMin}`);
