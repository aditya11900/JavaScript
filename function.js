function addTwoNumbers(a, b) {
  return a + b;
}

addTwoNumbers(2, 3); // 5
addTwoNumbers(10, 20); // 30
addTwoNumbers(100, "a"); // 100a

//return

function addTwoNumbers(a, b) {
    return a + b;
    }

    console.log(addTwoNumbers(2, 3)); // 5


function loggedIn(username) {
    return `Welcome ${username}`;
}

console.log(loggedIn("John")); // Welcome John
console.log(loggedIn());// Welcome undefined
console.log(loggedIn("")); // Welcome


function calculateCartPrice(...num1){ // rest parameter
    return num1
}
// console.log(calculateCartPrice(10, 20, 30, 40, 50)); // [10, 20, 30, 40, 50]

const user = {
    name: 'John',
    age: 30,
}

function handleObject(user){
    console.log(`Hello ${user.name}, you are ${user.age} years old`);
}

handleObject(user); // Hello John, you are 30 years old



