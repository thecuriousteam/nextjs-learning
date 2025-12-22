// Array containing multiple student objects
const students = [
  // objects
  { name: "Aman", marks: 82 },
  { name: "Riya", marks: 91 },
  { name: "Sohan", marks: 76 },
  { name: "Neha", marks: 88 },
];

// map
const canonicalData = students.map((std) => ({
  ...std,
  name: std.name.toLowerCase(),
}));

console.log("Global Format data: ", canonicalData);

// find
const findTopper = canonicalData.find((std) => {
  return std.name === "riya";
});

console.log("Name: ", findTopper);

// foreach
const studentsInfo = canonicalData.forEach((std) => {
  return console.log(std.name);
});

// filter
const toppers = canonicalData.filter((std) => {
  return std.marks > 80;
});

console.log("Toppers: ", toppers);
