// Declare a function fullName and it print out your full name.
function fullName() {
  console.log("faatihat Mohammed");
}

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName("faatihat", "Mohammed"));
// Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(a, b) {
  return (sum = a + b);
}
console.log(addNumbers(5, 5));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
let areaOfRectangle = (l, w) => l * w;
console.log(areaOfRectangle(5, 5));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
let perimeterOfRectangle = (l, w) => 2 * (l + w);

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
let speed = (distance, time) => distance / time;

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below
let BMI = (weight, height) => {
  let bmi = weight / (height * height);
  if (bmi >= 30) {
    return "obese";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi <= 18.5 && bmi >= 24.9) {
    return "Normal weight";
  } else if (bmi < 18.5) {
    return "underwieght";
  } else {
    return "your catesgory isnt found";
  }
};

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  if (typeof month !== "number" || month < 1 || month > 12) {
    return "Invalid month";
  }
  if (month >= 3 && month <= 5) {
    return "Spring";
  } else if (month >= 6 && month <= 8) {
    return "Summer";
  } else if (month >= 9 && month <= 11) {
    return "Autumn";
  } else {
    return "Winter";
  }
}
console.log(checkSeason(7));
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(num1, num2, num3) {
  let max = num1;
  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  }
  return max;
}

console.log(findMax(0, 10, 5));
