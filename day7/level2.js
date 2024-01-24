// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
let solveLinEquation = (a, b, c, x, y) => {
  return a * x + b * y + c;
};

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// let solveQuadratic = (a, b, c) => {
//   return a * x ** 2 + b * x + c;
// };
// console.log(solveQuadratic(1, 4, 4)); // {-2}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let printArray = (arr) => {
  for (let eachArr of arr) {
    console.log(eachArr);
  }
};
// arr = [1, 2, 3];
// arr.forEach((eachArr) => {
//   console.log(eachArr);
// });
let mArray = [1, 2, 3, 4, 5];
printArray(mArray);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
let showDateTime = () => {
  let date = new Date();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  console.log(`${month}/${day}/${year} ${hours}:${minutes}`);
};
showDateTime();

// Declare a function name swapValues. This function swaps value of x to y.

let swapValues = (x, y) => {
  let z = x;
  x = y;
  y = z;
  return { x, y };
};

console.log(swapValues(3, 4));
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
let evenCount = 0;
let oddCount = 0;
let evenNum = (numCount) => {
  for (let i = 0; i <= numCount; i++) {
    if (i % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  return {
    evenCount,
    oddCount,
  };
};
console.log(evenNum(100));

// Write a function which takes any number of arguments and return the sum of the arguments
let anyNum = (...nums) => {
  let sum = 0;
  for (const element of nums) {
    sum += element;
  }
  return sum;
};

console.log(anyNum(1, 2, 3));

// Writ a function which generates a randomUserIp.

function generateRandomUserIp() {
  const part1 = Math.floor(Math.random() * 256);
  const part2 = Math.floor(Math.random() * 256);
  const part3 = Math.floor(Math.random() * 256);
  const part4 = Math.floor(Math.random() * 256);

  const ipAddress = `${part1}.${part2}.${part3}.${part4}`;

  return ipAddress;
}

const randomUserIp = generateRandomUserIp();
console.log(randomUserIp);

// Write a function which generates a randomMacAddress
function generateRandomUserIp() {
  const randomPart = () => Math.floor(Math.random() * 256);

  const ipAddress = `${randomPart()}.${randomPart()}.${randomPart()}.${randomPart()}`;

  return ipAddress;
}

console.log(generateRandomUserIp());
