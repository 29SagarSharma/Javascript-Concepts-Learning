function sayName(){
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("R");
}

// sayName()

// function addTwoNumber(number1, number2){ //parameters
//     console.log(number1 + number2);
// }

// const result = addTwoNumber(3, 5) // arguments

function addTwoNumber(number1, number2){ //parameters
    // let result = number1 + number2;
    // return result;   //return ke baad kuch bhi likho use nayi hota function me
 
    //another method
    return number1 + number2
}
// const result = addTwoNumber(3, 5) // arguments
// console.log(result)

function loginUserMesssage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log((loginUserMesssage)("hitesh"))
//console.log((loginUserMesssage)()) //undefined just logged in 

function calculateCartPrice(...num1){ //rest Operator(paased all arguments)
    return num1
}

//console.log(calculateCartPrice(200,400,500))

const user ={
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

//handleObject(user) //callin function
/*handleObject({
    username: "sam",
    price:399
})*/

const myNewArray =[200,400,100,600]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray))
console.log(returnSecondvalue([200,400,500,1000]));