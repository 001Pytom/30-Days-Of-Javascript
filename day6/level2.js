// Develop a small script which generate any number of characters random id:
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const desiredLength = 10;
let randomId = "";

for (let i = 0; i < desiredLength; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomId += characters[randomIndex];
}

console.log(randomId);

// Write a script which generates a random hexadecimal number.
const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
console.log(randomHex);

// Write a script which generates a random rgb color number.
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);

const randomColor = `rgb(${red}, ${green}, ${blue})`;
console.log(randomColor);

let countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
let countryArr = [];
let countryLength;
for (let i = 0; i < countries.length; i++) {
  let countryLength = countries[i].length;
  countryArr.push(countryLength);

  //   console.log(`${countries[i]} has ${countries[i].length} length`);
}
console.log(countryArr);
// Use the webTechs array to create the following array of arrays:
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const arrayofArrays = webTechs.map((tech) => [tech, tech.length]);

console.log(arrayofArrays);
