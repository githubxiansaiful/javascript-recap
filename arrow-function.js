// Arrow function, multiple parameters, function body =>

// function declaration
function add(a, b) {
    return a + b;
}
// console.log(add(10, 10));

// funtion expression
const addition = function (num1, num2) {
    return num1 + num2
}
const result = addition(13, 17);
// console.log(result);

// arrow function
const sum = (c, d) => c + d;
const result2 = sum(13, 17);
// console.log(result);

// multi line arrow function
const name = (firstName, lastName = "") => {
    const fullName = firstName + lastName;
    // console.log(fullName);

}
name("Abu", "Kabu");

// anonymous function
// document.getElementById('').addEventListener('click', () => {

// });

// document.getElementById('btn-click').addEventListener('click', () => {

// });

const myFunction = () => {
    // console.log("my function called");
    return true;
}
myFunction();

// single parameter arrow function
const myFunc = () => console.log("single parameter function");
