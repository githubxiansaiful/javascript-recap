// 2-3 Array map to do one-line loop magic

// Multiline loop
const numbers = [2, 3, 4, 5, 6, 8];
const doubleNumber = [];
for (const num of numbers) {
    const result = num * 2;
    doubleNumber.push(result);
}

// Twoline loop
const doubleIt = x => x * 2;
const doubled = numbers.map(doubleIt);

// Oneline loop
const makeDouble = numbers.map(number => number * 2);


// String Length
const friends = ["Kamal", "Zamal", "Tomal", "Khomal"];

const nameLengths = friends.map(friendName => friendName.length);
const firstLetters = friends.map(name => name[3].toLowerCase());

// Mulitline Map
const friendIndex = friends.map((index) => {
    return index
});

console.log(friendIndex);
