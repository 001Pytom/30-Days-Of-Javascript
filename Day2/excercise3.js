// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let loveWord =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const wordToCount = "love";
console.log(
  loveWord.match(new RegExp("\\b" + wordToCount + "\\b", "gi")) || []
);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence2 =
  "You cannot end a sentence with because because because is a conjunction";
const wordToCount2 = "because";

const wordCount = (
  sentence2.match(new RegExp("\\b" + wordToCount2 + "\\b", "gi")) || []
).length;

console.log(
  `Number of occurrences of the word '${wordToCount2}': ${wordCount}`
);

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.

const text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

// Initialize totalIncome to 0
let totalIncome = 0;

// Split the text into words
const words = text.split(" ");

// Iterate through each word
for (let i = 0; i < words.length; i++) {
  // Check if the current word is a number
  const number = parseInt(words[i], 10);

  // If it's a valid number, add it to totalIncome
  if (!isNaN(number)) {
    totalIncome += number;
  }
}

console.log(`Total Annual Income: ${totalIncome} euro`);
