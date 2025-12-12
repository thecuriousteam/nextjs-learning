// normal function
function greet(name, age) {
  console.log("Hello My name is " + name + " and age is: " + age);
}

greet("nandan", 24);

// arrow function
const greetings = (name, age) => {
  console.log("Hello My name is " + name + " and age is: " + age);
};

greetings("Nandan", 24);

// short hand arrow function
// const add = (a, b) => a + b;

const add = (a, b) => {
  return a + b;
};

var sum = add(10, 20);
console.log("The sum is: ", sum);
