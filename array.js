const myArray = [1, 2, 3, 4, 5];
// console.log(myArray);

// console.log(myArray[0]); // 1 it is zero based index

//methods

myArray.push(6); // it will add the element at the end of the array

// console.log(myArray);   // [1, 2, 3, 4, 5, 6]

myArray.unshift(0); // it will add the element at the start of the array
// console.log(myArray); // [0, 1, 2, 3, 4, 5, 6]

myArray.pop(); // it will remove the element from the end of the array
// console.log(myArray);

myArray.shift(); // it will remove the element from the start of the array
// console.log(myArray); // [1, 2, 3, 4, 5]

// console.log(myArray.includes(3)); // true
// console.log(myArray.includes(10)); // false


console.log("A ", myArray);

const myNewArray = myArray.slice(1, 3); // it will create a new array from the existing array
console.log(myNewArray) // it will return the new array [2, 3] but the existing array will remain the same
console.log("B ", myNewArray); // [2, 3]

const myNewArray2 = myArray.splice(1, 3); // it will remove the elements from the existing array
console.log("C ", myNewArray2); // [2, 3, 4]
console.log(myNewArray2) // it will return the removed elements but the existing array will be changed
