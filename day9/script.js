const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split("");
  return [first.toUpperCase(), ...others].join("");
};

console.log(upperFirstWord("hello i am faatihat"));

// higher order function

const transfoermer = function (str, fn) {
  console.log(`Transformed string ${fn(str)}`);
  console.log(fn.name);
};

transfoermer("JavaScript is the best!", upperFirstWord);

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => (sum += num));
// console.log(sum);

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries.forEach((element) => console.log(element.toUpperCase()));

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
