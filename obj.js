// javascript is a prototype type language which means that every object in javascript has a prototype property and this property is also an object. All objects in javascript inherit their properties and methods from their prototype.
const user = {
    username: "kalu",
    loginCount: 8,
    signedIn : true,
    
    getUserDetails: function(){
        // console.log(`Username is ${this.username}, user has logged in ${this.loginCount} times`);
    }
 }

//  const promiseOne = new Promise();
//  const date = new Date();

 //constructor function

 function User(username, loginCount, signedIn){
     this.username = username; // this is pointing to the current object
     this.loginCount = loginCount; // this is pointing to the current object
     this.signedIn = signedIn;

     return this; // here we are returning the current object which is created by the constructor function
     // we may not return this object explicitly, it will return the object automatically
 }

 const UserOne = new User("kalu", 8, true); // here we are creating the object of the User constructor function and the new keyword is used to create the object of the constructor function which is new instance of the User constructor function
const UserTwo = new User("kalua", 10, false); // here we are creating the object of the User constructor function and the new keyword is used to create the object of the constructor function which is new instance of the User constructor function

//??note if we don't use the new keyword then it will reWrite the object which is not a good practice 

console.log(UserOne);
console.log(UserTwo);



// when we use the new keyword then it will create the new empty object and it will return the object automatically
