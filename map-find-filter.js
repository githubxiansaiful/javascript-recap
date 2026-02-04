const students = [
    {
        id: 1,
        name: 'Alice',
        age: 20,
        grade: 85
    },
    {
        id: 2,
        name: 'Bob',
        age: 22,
        grade: 92
    },
    {
        id: 3,
        name: 'Charlie',
        age: 19,
        grade: 78
    },
    {
        id: 4,
        name: 'David',
        age: 21,
        grade: 88
    },
    {
        id: 5,
        name: 'Kamal',
        age: 11,
        grade: 5
    }
]

// Get all student names
const studentNames = students.map(student => student.name);

// Get all students with grade less than 33
const badStudents = students.filter(student => student.grade < 33);

// Get all students with grade greater than 33
const goodStudents = students.filter(student => student.grade > 33);

// Find the first student with grade less than 33
const firstGoodStudent = students.find(student => student.grade > 33);

console.log(firstGoodStudent);
