function setUserName(userName){
    this.userName = userName;
}

function createUser(username,email,password){
    setUserName.call(this,username); // yeh call nhi hua hai  to call this function we have to use call or apply method
    this.email = email;
    this.password = password;
}

const user = new createUser('John','abd@gmail.com',1234);
console.log(user);