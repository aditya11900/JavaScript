function outer(){
    let username = "Adi";
    function inner(){
        let chocolate = "Dairy Milk";
        console.log("inner",username);
        function innerKeInner(){
            console.log("innerKeInner",chocolate,username)
        }
        innerKeInner()
    }
    inner()
}
outer()

//this is lexical scoping

//closure is a function that has access to the outer function scope even after the outer function has closed    
//closure is a function that has access to the outer function scope even after the outer function has closed

function makeFun(){
    const name = "hello";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc();

