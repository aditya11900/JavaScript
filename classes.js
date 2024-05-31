class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        // logic to encrypt password
        return `${this.password}encrypted`
    }
}

const user = new User('John','an@gmail.com',1234);

console.log(user.encryptPassword());