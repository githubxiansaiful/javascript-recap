// 2 - 2 Access Value, nested object, Optional chaining, Dot notation vs bracket notation

const student = {
    name: "Karim",
    age: 20,
    marks: {
        math: 95,
        science: 90
    },
    1: 50,
    'Address Where': 'Dhaka',
}

// get student name
const studentName = student.name;

//const studentAddress0 = student.Address Where  // wrong way
// const studentValue = student.1 // wrong way

// use 3rd bracket
const studentAddress1 = student['Address Where'] // correct way
 // wrong way

console.log(studentAddress1);
