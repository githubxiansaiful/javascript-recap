// 2 - 2 Access Value, nested object, Optional chaining, Dot notation vs bracket notation

const student = {
    name: "Karim",
    age: 20,
    marks: {
        math: 95,
        science: 90
    },
    guardianDetails: {
        // father: {
        //     name: "Jamal",
        //     age: 55
        // },
        mother: {
            name: "Noor Jahan",
            age: 45
        }
    },
    1: 50,
    'Address Where': 'Dhaka',
}

// Get data from object
const studentAge = student.age; // output: 20
const studentMark = student.marks.math; // output: 95

// get student guardian father details
const fatherName = student.guardianDetails.father?.name;

console.log(fatherName);
