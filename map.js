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
const makeDouble = numbers.map(x => x * 2);