// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

const numbers = text.match(/\d+/g);

const totalAnnualIncome = numbers.reduce(
  (total, num) => total + parseInt(num),
  0
);

console.log("Total Annual Income:", totalAnnualIncome, "euro");

// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
let txt =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.";
let points = txt.match(/-?\d/g);
console.log(points);
let sortedPoints = points.sort((a, b) => a - b);
console.log(sortedPoints[sortedPoints.length - 1] - sortedPoints[0]);

// Write a pattern which identify if a string is a valid JavaScript variable
const isValidVariable = (variable) =>
  /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(variable);
