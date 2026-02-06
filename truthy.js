// 3-3 Different Truthy and Falsy Values in JavaScript
let data;
data = 0; // Falsy
data = ""; // Falsy
data = null; // Falsy
data = undefined; // Falsy
data = false; // Falsy
data = NaN; // Falsy
data = 1; // Truthy
data = "Hello"; // Truthy
data = []; // Truthy
data = {}; // Truthy
data = function () { }; // Truthy
data = "Hello World";

// If I need to capture the falsy value to go inside of block
// use logical not
if (!data) {
    console.log("Something is Wrong", data); 
}
else {
    console.log(typeof data, "logical not");
}

// Capture all positive value
// double not !!

