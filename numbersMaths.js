const score = 34;

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toFixed(2)); // 100.00


// Math object

console.log(Math);

console.log(Math.abs(-100)); // 100
console.log(Math.round(2.4)); // 2
console.log(Math.ceil(2.4)); // 3 it choose the next number
console.log(Math.floor(2.9)); // 2 it choose the previous number
console.log(Math.sqrt(100)); // 10
console.log(Math.pow(2, 3)); // 8
console.log(Math.min(2, 3, 4, 5, 6)); // 2
console.log(Math.max(2, 3, 4, 5, 6)); // 6

console.log(Math.random()); // it will give a random number between 0 and 1
console.log(Math.floor(Math.random() * 10 + 1)); // it will give a random number between 1 and 10 