// Keys, values, entries, delete, seal, freeze
const employee = {
    name: 'Alice',
    age: 30,
    position: 'Developer'
}
Object.seal(employee); // Sealing the object
delete employee.name; // This will not delete the name property

console.log(employee);


// The Object.seal() method prevents additions or deletions of new properties.

// The Object.seal() method makes existing properties non-configurable.

// The Object.seal() method will fail silently in non-strict mode.

// The Object.seal() method will throw a TypeError in strict mode.

// The Object.isSealed() method can be used to check if an object is sealed.