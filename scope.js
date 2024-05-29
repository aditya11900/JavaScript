// let a = 10 ;
// const b = 20;
// var c = 30;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

let a = 300;  // global scope

if (true){
    let a = 40; // block scope
    const b = 50;
    // var c = 60;
    // console.log(a); // 40
    // console.log(b); // 50
    // console.log(c); // 60
    console.log("inner",  a);
}

// console.log(a); // a is not defined because a is declared using let keyword and it is block scoped
// console.log(b); // b is not defined because b is declared using const keyword and it is block scoped
// console.log(c); // 60 

// console.log("outer", a);

//closure in javascript
function outerFunction(){
    let outerVariable = "I am outer variable";
    function innerFunction(){
        let innerVariable = "I am inner variable";
        console.log(outerVariable);
        console.log(innerVariable);
    }
    return innerFunction;
}


function addone(value){
    return value + 1;
}
addone(5)

const addTwo = function(value){
    return value + 2;
}
addTwo(5);