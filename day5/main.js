// document.write('<script src="countries.js"></script>');
// document.write('<script src="web_techs.js"></script>');
// import {countries} from "./countries";

// console.log("Countries:", countries);
// // console.log("Web Techs:", webTechs);

// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let words = text.split(" ");
console.log(words);
console.log(words.length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.shift("Honey");
shoppingCart[2] = "Green Tea";
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let countries = ["Afghanistan", "Albania", "Algeria"];
let ethopiaExist = countries.includes("Ethopia");

if (ethopiaExist) {
  console.log("Ethopia");
} else {
  countries.push("Ethpoia");
  console.log(countries);
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = backEnd.concat(frontEnd);
console.log(fullStack);
