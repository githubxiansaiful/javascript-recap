// Loop through an object using for in

const numbers = [13, 23, 56, 64, 75];
// Use of when it's array
for (const number of numbers) {
    // console.log(number);
}

const employee = {
    name: "Kamal",
    age: 20,
    position: "driver"
}

for (const key in employee) {
    const value = employee[key];
    console.log(key, value);
    
}