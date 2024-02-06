const Dog = {
  name: "Ruby",
  legs: 4,
  color: "black",
  bark: function () {
    return "woof woof";
  },
};
console.log(Dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object

console.log(Dog.name);
console.log(Dog.legs);
console.log(Dog.color);
console.log(Dog.age);
Dog.breed = "i dont know";
console.log(Dog.breed);
