function multiplyBy5(num) {
    return num*5
  }
  
  multiplyBy5.power = 2;
  
  // console.log(multiplyBy5(5)); // 25
  // console.log(multiplyBy5.power); // 2
  // console.log(multiplyBy5.prototype);
  
  //******************************************************** */
  
  function createUser(name, age) {
    this.name = name;
    this.age = age;
  }
  
  //
  createUser.prototype.incremmentAge = function() {
    this.age++;
  }
  
  createUser.prototype.printMe = function() {
    console.log(`you are ${this.age} years old`);
  } 
  
  const chai = new createUser("Chai", 30);
  //const chai =  createUser("Chai", 30); // when you dont use new keyword it will return undefined because it is not returning anything or it dosent know what the context is
  const tea = new createUser("Tea", 20);
  
  // chai.incremmentAge();
  // chai.printMe();
  // tea.printMe();
  
  
  //******************************************************** */
  //prototype
  
  // let myName = "adi     "
  // console.log(myName.length);
  
  // we need to create a method to remove the white spaces from the string
  
  let myHeros = ["thor", "ironman", "loki"];
  
  let heroPower={
      thor: "thunder",
      ironman: "money",
      loki: "mischief",
  
      getThorPower(){
          console.log(`Thor power is ${this.thor}`);
      }
  }
  
  Object.prototype.adi = function(){
      console.log("Adi is present in the object");
  }
  
  Array.prototype.heyAdi = function(){
      console.log("Adi is present in the array");
  }
  
  heroPower.adi();
  myHeros.heyAdi();
  
  // heroPower.heyAdi(); // it will not work because heyAdi is a method of array prototype and heroPower is an object
  
  
  