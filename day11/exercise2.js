// Iterate through the users array and get all the keys of the object using destructuring
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

users.forEach((user) => {
  const { name, scores, skills, age } = user;
  console.log(name, scores, skills, age);
  //   console.log(`User: ${name}, Scores: ${scores}, Skills: ${skills.join(', ')}, Age: ${age}`);
});

// Find the persons who have less than two skills

const usersWithLessSkills = users.filter((user) => user.skills.length < 2);

console.log("Persons with less than two skills:");
console.log(usersWithLessSkills);
