// 3-4 double equal (==) vs triple equal (===), implicit conversion 

console.log(2 === 2); // true
console.log(2 === '2'); // false, no implicit conversion
console.log(2 == '2'); // true, implicit conversion happens

console.log(false == 0); // true, implicit conversion happens
console.log(false === 0); // false, no implicit conversion  
console.log(null == undefined); // true, implicit conversion happens
console.log(null === undefined); // false, no implicit conversion
console.log([5] === "5"); // false, no implicit conversion

