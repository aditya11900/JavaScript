//primitime data types

// 7 types of data types in JS
// 1. Number , 2. String, 3. Boolean, 4. Undefined, 5. Null, 6. Object, 7. Symbol

const score = 34; // return type is number
const scoreValue = 34.34; // return type is number
const name = 'John';    // return type is string
const isTrue = true;   // return type is boolean
 const temp = null;   // return type is object
 const id = Symbol('123');  // return type is symbol
 const id2 = Symbol('123');  // return type is symbol

 console.log(id === id2); // false because it is unique

// Reference data types(Non primitive data types)

// 1. Array, 2. Object literals, 3. Functions

const heros = [" 'Superman', 'Batman ', 'Wonder" ];  // return type is object

let myObj = {"name": "John", 
              "age": 30};  // return type is object

const myFunction = function(){
    return 'Hello';
}       // return type is function


//************************************  */

// memory

// 1. Stack memory - stores the values of the variables that are declared in the program

let email1  = 'John@gmail.com'; // stack memory

let email2 = email1; // this will not create a new memory in the stack, it will point to the same memory location

email2 = "joy@gmail.com"; // this will create a new memory location in the stack and assign the value to it. 

console.log(email1); // john@gmail.com
console.log(email2); // joy@gmail.com

// 2. Heap memory - stores the values of the variables that are assigned in the program and also stores the reference data types

let user = {"name": "John", 
             "age": 30}; // heap memory

let user2 = user; // this will not create a new memory in the heap, it will point to the same memory location

user2.name = "Joy"; // this will change the value of the name in the heap memory

console.log(user); // {name: "Joy", age: 30}
console.log(user2); // {name: "Joy", age: 30}