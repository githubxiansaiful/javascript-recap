// Spread operator, array max, copy arrays

const numbers = [20, 42, 54];
const allNumbers = [10, 43, 35, ...numbers, 50, 950] // this will show both numbers and allNumbers

const findMax = Math.max(...allNumbers); // this will show max number, max number will show from both variable

// copy array
const arraryOne = [1, 2, 3, 4, 5];
const arrayTwo = [...arraryOne];
arrayTwo.push(6)
console.log(arrayTwo);
