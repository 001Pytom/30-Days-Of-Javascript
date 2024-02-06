// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
  firstname: "faatiaht",
  lastname: "Mohammed",
  age: 21,
  skills: ["HTML", "CSS", "JS", "python"],
  country: "Nigeria",
};

const studentString = JSON.stringify(student, undefined, 4);
console.log(studentString);
localStorage.setItem("student", studentString);
console.log(localStorage);
