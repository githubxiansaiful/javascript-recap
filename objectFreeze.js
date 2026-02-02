// Keys, values, entries, delete, seal, freeze
const employee = {
    name: 'Alice',
    age: 30,
    position: 'Developer'
}

Object.freeze(employee);
delete employee.name;
console.log(employee);
