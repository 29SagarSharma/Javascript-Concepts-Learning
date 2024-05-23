/*  ****Primitive *****
   
  7 types : String , Number, Boolean, null, undefined , Symbol(unique bnane ke liye), BigInt*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =  null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false symbol make them different 

// const bigNumber = 32324324232532n

 
 /* *******Reference (Non Primitive)

  // Array, Objects, Functions, */

     const heros = ["shaktiman", "nagraj", "doga"];
     let myObj = {
        name: "hitesh",
        age : 22,
     }

     const myFunction = function(){
        console.log("Hello world");

     }
     console.log(typeof(bigNumber)) //undefined //ecma script se type check krna h values ka
     console.log(typeof(outsideTemp)) //object  
     console.log(typeof(scoreValue)) // Number
     console.log(typeof  anotherId)
  