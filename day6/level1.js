// Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i < 11; i++) {
  console.log(i);
}
let j = 0;
while (j < 11) {
  console.log(j);
  j++;
}
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);
// Iterate 10 to 0 using for loop, do the same using while and do while loop
// use negative and decreement here
// Iterate 0 to n using for loop
let n = 5;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// Write a loop that makes the following pattern using console.log():

for (let i = 1; i <= 7; i++) {
  let line = "";

  for (let j = 1; j <= i; j++) {
    line += "#";
  }

  console.log(line);
}

// Use loop to print the following pattern:5
for (let i = 0; i < 11; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}
// Using loop print the following pattern6
console.log("i    i^2   i^3");
for (let i = 0; i < 11; i++) {
  console.log(`${i}    ${i ** 2}     ${i ** 3}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i < 101; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   } else {
//     // continue;
//   }
// }
// Use for loop to iterate from 0 to 100 and print only prime numbers
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let total = 0;
for (let i = 0; i < 101; i++) {
  total += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${total}`);
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    sumEven += i;
  } else if (i % 2 !== 0) {
    sumOdd += i;
  }
}
console.log(sumEven, sumOdd);
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumArr = [];
sumArr.push(sumEven, sumOdd);
console.log(sumArr);

// Develop a small script which generate array of 5 random numbers
let randomNumArr = [];
let randomNum;
for (let i = 0; i < 6; i++) {
  let randomNum = Math.floor(Math.random() * 6);
  randomNumArr.push(randomNum);
}
console.log(randomNumArr);
// Develop a small script which generate a six characters random id:
// let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
// let randomId = "";
// for (let i = 0; i < 6; i++) {
//   let randomIndex = Math.floor(Math.random() * characters.length);
//   randomId += characters[randomIndex];
// }
// console.log(randomId);
