const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

const [name, skills, [, , jsScore, reactScore]] = student;

console.log(name, skills, jsScore, reactScore);

function convertArrayToObject(students) {
  return students.map((student) => {
    const [name, skills, scores] = student;
    return {
      name,
      skills,
      scores,
    };
  });
}

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

console.log(convertArrayToObject(students));
