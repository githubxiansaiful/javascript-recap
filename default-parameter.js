// Function default parameter for not provided values (=)

function sum(num1, num2) {
    const total = num1 + num2;
    // log 30
}
sum(10, 20);

// Now we will create an function with defualt values
function name(firstName, LastName = "Mia") {
    const fullName = firstName + " " + LastName;
    console.log(fullName);
}
name("karim"); // As we wrote one argument and set a default value then we won't get not defined error