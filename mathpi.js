const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descripter.value);
// console.log(descripter); //3.141592653589793
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// } 

const chai ={
    name: 'chai',
    price: 100,
    quantity: 10
}

console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false,
// });