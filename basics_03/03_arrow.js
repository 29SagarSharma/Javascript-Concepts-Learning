const user={
    username:"hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); //current context
    }
}
// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()

//console.log(this) //{} becz there is no context in global in node.js 
/*  but ib browser the global context is whole window so this keyword shows all property of window like click etc*/

// function chai(){
//     let username = "hitesh"
//     console.log(this); //many things in output
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()  // ndefined

const chai = () => {       // arrow function
    let username = "hitesh"
    console.log(this);
}

//chai()

// const addTwo = (num1,num2) => {   //curly braces use kiya tho return likhna pdeag (explict return )
//     return num1 + num2;
// }

//const addTwo =(num1,num2) => num1 + num2

//const addTwo =(num1,num2) => (num1 + num2)  //impcit return

const addTwo =(num1,num2) => ({username: "hitesh"})  //object have to wrao in curly braces
console.log(addTwo(3,4))

// const myArray =[2,3,4,5]

// myArray.forEach(() => ())