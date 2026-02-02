// (advanced) Object and Array Destructuring

const product = {
    name: "Laptop",
    price: 100,
    vat: 20,
    quantity: 50
};
// Object destructuring with renaming
const { productName, quantity, vat, price } = product;

// Total price calculation 
const totalPrice = price + (price * vat / 100);

// console.log(totalPrice); // 120


// array destructuring
const numbers = [1445, 2546, 543, 84, 51];
const [n1, n2, n3] = numbers;

console.log(n1); // 1445
