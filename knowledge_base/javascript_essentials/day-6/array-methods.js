// map(), filter(), find()

// Array of students with marks
const students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 92 },
  { name: "Sohan", marks: 76 },
];

// 1️⃣ map - create a new list of student names
const studentsData = students.map((stdData) => {
  return stdData.name;
});

console.log("Student Name: ", studentsData);

// 2️⃣ filter - students who scored above 80
const toppersData = students.filter((stdData) => {
  return stdData.marks > 80;
});

console.log("Student Name: ", toppersData);

// 3️⃣ find - find the first student with marks above 90

const firstTopper = students.find((stdData) => {
  return stdData.marks > 90;
});

console.log("Student Name: ", firstTopper);
