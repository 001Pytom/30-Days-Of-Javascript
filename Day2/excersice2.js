// Using console.log() print out the following statement:
console.log(
  `'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);
// Using console.log() print out the following quote by Mother Teresa:
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let value = "10";

if (typeof value === "string") {
  value = parseInt(value, 10);
}

console.log(value);
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// Check if 'on' is found in both python and jargon

let word1 = "python";
let word2 = "jargon";
if (word1.includes("on") && word2.includes("on")) {
  console.log("yes");
}
// or
const pythonString = "python";
const jargonString = "jargon";

const isOnInPython = pythonString.includes("on");
const isOnInJargon = jargonString.includes("on");

console.log(`'on' is found in Python: ${isOnInPython}`);
console.log(`'on' is found in Jargon: ${isOnInJargon}`);

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let fullOfJargon = "I hope this course is not full of jargon";
console.log(fullOfJargon.includes("jargon"));
// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));
// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 51) + 50);
// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256));
// Access the 'JavaScript' string characters using a random number.
const str = "JavaScript";
const randomIndex = Math.floor(Math.random() * str.length);
const randomCharacter = str.charAt(randomIndex);

console.log(`Random character at index ${randomIndex}: ${randomCharacter}`);
