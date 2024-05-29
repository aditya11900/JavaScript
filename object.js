// singleton

//object literal
const user = {
    name: 'John',
    age: 30,
    email: 'abc@gmail.com',
    "full name": "John Doe",
};

console.log(user.email);

//note 
// 1. object literals are key value pairs
// 2. keys are always strings
//3. symbols are unique and if we want to access the sybmol we need to use the square brackets
//4. we can use the square brackets to access the key value pairs

const tinderUser = new Object(); //singelton object  it will create a new object in the heap memory and assign the values to it 

tinderUser.name = 'John';
tinderUser.age = 30;

console.log(tinderUser);

const regularuser = {
    email:"abc@gmail.com",
    name: 'John',
    age: 30,
    fullName:{
        firstName: 'John',
        lastName: 'Doe'
    },
    hobbies: ['music', 'sports'],
    };

    //object assign

    const obj01 = {a: 1, b: 2};
    const obj02 = {c: 3, d: 4};
    const obj03 = {e: 5, f: 6};

    const obj04 = Object.assign({},obj01, obj02, obj03);

    console.log(obj04);

    //spread operator

    const obj05 = {...obj01, ...obj02, ...obj03};
    console.log(obj05);

    const users =[
        {name: 'John', age: 30},
        {name: 'Joy', age: 40},
        {name: 'Doe', age: 50},
    ];

    




