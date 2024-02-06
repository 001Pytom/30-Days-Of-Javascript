// Check the speed difference among the following loops: while, for, for of, forEach

let newCountries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < newCountries.length; i++) {
  console.log(newCountries[i][0], newCountries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("Regular while loop");
let j = 0;
while (j < newCountries.length) {
  console.log(newCountries[j][0], newCountries[j][1]);
  j++;
}
console.timeEnd("Regular while loop");
