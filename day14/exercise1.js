// no exercise 14 , but here i wated a video and i am doing the challenge
let humanAge;
let calcAvergaeHumanAge = (ages) => {
  let newDogAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(newDogAge);

  let dogLessThan18 = newDogAge.filter((newDog) => newDog >= 18);
  console.log(dogLessThan18);

  let total = dogLessThan18.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  console.log(total);

  let averageAge = total / dogLessThan18.length;

  return averageAge;
};

console.log(calcAvergaeHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAvergaeHumanAge([16, 6, 10, 5, 6, 1, 4]));
// i got it right
// now we need to use chaining

let calcAvergaeHumanAge2 = (ages) => {
  let newDogAge = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((newDog) => newDog >= 18)
    .reduce(function (acc, curr, i, arr) {
      return acc + curr / arr.length;
    }, 0);

  return newDogAge;
};

console.log(calcAvergaeHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAvergaeHumanAge2([16, 6, 10, 5, 6, 1, 4]));

// trying the sort method

let numbers = [1, 2, -1, 0, -2, 4, 6, 7, 8];
let numbers2 = [1, 2, -1, 0, -2, 4, 6, 7, 8];
let numbers3 = [1, 2, -1, 0, -2, 4, 6, 7, 8];

// ascending , opposite for descending
// let sortednumbers = numbers.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// let sortednumbers4 = numbers2.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// console.log(sortednumbers4);

// in a simplified manner
//acscendng order
let sortednumbers2 = numbers2.sort((a, b) => {
  a - b;
});

// // descening
let sortednumbers3 = numbers3.sort((a, b) => {
  b - a;
});

// console.log(sortednumbers);
console.log(sortednumbers2);
console.log(sortednumbers3);
