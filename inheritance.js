class User {
    constructor(username){
        this.username = username;
    }
    //method
    login(){
        console.log(`${this.username} has logged in`);
    }
}

//inheritance

class Admin extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;

    }
    addCourse(){
        console.log(`${this.username} has added a course`);

    }
}

const user = new User('John');

const admin = new Admin('kalu','ad@gmail.com',1234);
admin.addCourse();

user.login();

admin.login();