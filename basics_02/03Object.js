// singleton (ek trh ka object)
//object.create // constructer se singelton bnta h literal se nayi

// object literals
const mySym = Symbol("Key1")

const JsUser = {
    name : "Hitesh",  
    "full name" :"Hitesh Chaudhary",
   [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastLogininDAys:["Monday", "Saturday"]     
}
//to acess object 2 method
//console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email="hitesh@chatgpt.com" //update the value
// Object.freeze(JsUser) // to freeze the value
// JsUser.email = "hitesh@microsoft.com"
// //console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())
