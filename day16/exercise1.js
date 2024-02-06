const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const skillsJson = JSON.stringify(skills, undefined, 4);
console.log(skillsJson);
console.log(typeof skillsJson);

// Stringify the age variable
const ageJSON = JSON.stringify(age);
console.log(ageJSON);

// Stringify the isMarried variable
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);

// Stringify the student object
const studentJSON = JSON.stringify(student, undefined, 4);
console.log(studentJSON);

// Stringify the students object with only firstName, lastName and skills properties
const studentSubset = {
  firstName: student.firstName,
  lastName: student.lastName,
  skills: student.skills,
};
const studentSubsetJSON = JSON.stringify(studentSubset);
console.log(studentSubsetJSON);
