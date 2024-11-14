function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power); //2 becz function can also act as function
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username= username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++ // jiska score pucha huska  bda do
}
createUser.prototype.printMe= function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser('tea' , 250) //if there is new keyword then it is undefined

chai.printMe()

