//filter is something that filters out the elements of an array based on a condition

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = myNums.filter((num) => {
    return num % 2 === 0;
});

// console.log(evenNums); // [2, 4, 6, 8, 10]

const oddNums = myNums.filter((num) => {
    return num % 2 !== 0;
});

// console.log(oddNums); // [1, 3, 5, 7, 9]

const newNums = []

myNums.forEach((num) => {
    if (num % 2 === 0) {
        newNums.push(num);
    }
});

// console.log(newNums); // [2, 4, 6, 8, 10]

//map is something that creates a new array based on the existing array

const doubleNums = myNums.map((num) => {
    return num * 2;
});

console.log(doubleNums); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//add 10 to each element of the array

const addTen = myNums.map((newVal)=>{
    return newVal + 10;
})

// console.log(addTen); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//reduce is something that reduces the array to a single value

const sum = myNums.reduce((accumulator, currentValue) => { 
    return accumulator + currentValue;
}, 0);