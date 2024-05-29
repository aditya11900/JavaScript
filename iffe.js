// IFFE is immediately invoked function expression
// It is a function that is executed immediately after it is created
// IFFE is used to avoid polluting the global scope

// IFFE syntax
(function(){
    console.log("I am IFFE");
})();

//arrow with IFFE
(()=>{
    console.log("I am IFFE");
})