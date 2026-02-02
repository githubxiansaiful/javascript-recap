// Template string, multiple line string, dynamic string (` `)

// Old way
const banglaPoem = "Am pata jura jura" + "Marbo Cabuk corbo ghura" + "ore bubu sore dara" + "ashe amar pagla ghura";

// console.log(banglaPoem);

// Now we will use template string ``
const banglaKobita = `Am pata jura jura
marbo cabuk corbo ghura
ore bubu sore dara
asche amar pagla ghura`;

// console.log(banglaKobita);

// Another example
function sum(n1, n2) {
    const total = `${n1} + ${n2} equal is ${n1 + n2}`;
    // console.log(total);

}
sum(10, 10);

function phonePrice(price) {
    const discount = `Phone price is ${price} and after discount price ${price * .8}`;
    console.log(discount);
    
}
phonePrice(100);