let firstName = "faatihat";
let lastName = "Mohammed";
let age = 22;
let country = "Nigeria";
let city = "Ilorin";

localStorage.clear();
localStorage.setItem("firstname", firstName);
localStorage.setItem("lastname", lastName);
localStorage.setItem("age", age);
localStorage.setItem("country", country);
localStorage.setItem("city", city);

console.log(localStorage);
