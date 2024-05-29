const user = {
    name: 'John',
    age: 30,

    welcomeMessage: function () {
        console.log(`Hello ${this.name}, you are ${this.age} years old`);
        // console.log(this); // {this belongs to the usere object}  so here this is pointing the current context
}
}
// user.welcomeMessage();
// user.name='Joy';
// user.welcomeMessage();

// console.log(this); 

// {this belongs to the window object}  so here this is pointing the window object
// output {} empty object

//but when we try to access the this in browser console it will return the window object which is global object.


//arrow function
 const addTwoNumbers = (a, b) => {
     return a + b;
 }
// console.log(addTwoNumbers(2, 3)); // 5

//implicit return
const addTwoNumberss = (a, b) => a + b;

// console.log(addTwoNumberss(2, 3)); // 5


