const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.
//
console.log(users["Paul"].skills.length);

let maxSkills = 0;
let skilledPerson = "";

for (const user in users) {
  if (users.hasOwnProperty(user)) {
    const skillsCount = users[user].skills.length;

    if (skillsCount > maxSkills) {
      maxSkills = skillsCount;
      skilledPerson = user;
    }
  }
}

console.log(`${skilledPerson} has the most skills with ${maxSkills} skills.`);

// Count logged in users, count users having greater than equal to 50 points from the following object.
let count = 0;
let fiftyPoints = 0;
for (const user in users) {
  let loggedIn = users[user].isLoggedIn;
  let points = users[user].points;
  if (loggedIn) {
    count += 1;
  }

  if (points >= 50) {
    fiftyPoints += 1;
  }
}
console.log(count);
console.log(fiftyPoints);
// Find people who are MERN stack developer from the users object

// Set your name in the users object without modifying the original users object
users.Faatihat = {};
console.log(users.Faatihat);

// Get all keys or properties of users object
console.log(Object.keys(users));
// Get all keys or properties of users object

console.log(Object.values(users));
