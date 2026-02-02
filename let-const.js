const name = "Saiful";
console.log(name); // Output: Saiful

// name = "Xian"; // This will cause an error because 'name' is a constant, we can not reassign it.

// Output: TypeError: Assignment to constant variable.
// To fix the error, we should use 'let' if we want to reassign the variable.

let age = 55;
console.log(age); // Output: 55
age = 60; // Reassigning the variable
console.log(age); // Output: 60

const student = {
    id: 108,
    name: "Saiful Islam",
    marks: 98
};

student.marks = 99; // We can change properties of a constant object

console.log(student)
// Output: { id: 108, name: 'Saiful Islam', marks: 99 }


const numbers = [12, 45, 60];
numbers.push(99) // We can reassign the number

console.log(numbers);

// Use let only if reassignment is needed
// Always use const by default

// Example
const API_URL = "/api/data";

let counter = 4;