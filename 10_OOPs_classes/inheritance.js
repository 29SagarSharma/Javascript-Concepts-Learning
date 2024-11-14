class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{  //extends keyword help to refer all the property of user in teacher
    constructor(username, email, password){
        super(username)  // super keyword directly acces the vale of username form user class without using this keyword
        this.email=email;
        this.password=password;

    }
    addCourse(){
        console.group(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher", "123")

chai.addCourse()
const masalaChai = new User("masalaChai")

chai.logMe()
const masalaChai1 = new User("masalaChai");

masalaChai.logMe()

console.log(chai instanceof Teacher);  //instance means uska parts like child

