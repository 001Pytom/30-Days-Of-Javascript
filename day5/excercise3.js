let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
let sortedArray = ages.sort();
console.log(ages[0]);
console.log(ages[ages.length - 1]);
// Find the median age(one middle item or two middle items divided by two)
console.log(ages[ages.length / 2]);
console.log(ages);
// Find the average age(all items divided by number of items)
let total = 0;
ages.forEach((age) => {
  total += age;
});
console.log(total);

// Find the range of the ages(max minus min)
console.log(ages[ages.length - 1] - ages[0]);
