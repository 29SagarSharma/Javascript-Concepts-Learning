let score = undefined //"33","33abc", "Null", "undefined", "true"

// console.log(typeof score);
// console.log(typeof(score)); 

let valueInNumber = Number(score) //Conversion in to number
// console.log(typeof valueInNumber);
// console.log(valueInNumber) 

//"33" =>33
//"33abc" => NaN
// true => 1; false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//1=> true ; 0 => false 
// "" => false
// "hitesh" => true
 let someNumber = 33
 let stringNumber = String(someNumber) //converted to string
 //console.log(stringNumber);
 //console.log(typeof stringNumber); // type pta krne ke liye

 // ****************************Operations **********************

 let value = 3
 let negvalue = -value
 //console.log(negvalue); //-3

//  console.log(2+2) 4
//  console.log(2-2) 0 
//  console.log(2*2) 4
//  console.log(2**3) power =8
//  console.log(2/3) divide =0.66666
//  console.log(2%3) remainder =2

let str1= "hello"
let str2 ="hitesh"

let str3 = str1 + str2
//console.log(str3);

// console.log("1" +2); 12
// console.log(1 + "2"); 12
// console.log("1 "+2 + 2 ); 1 22
// console.log(1 +2 + "2"); 32

//                   tricky conversion pr nayi krna chahiye ase
// console.log(+true) 1
// console.log(+"") 0

let gameCounter = 100
gameCounter++       //prefix,poostfix padhni js/mdn se padhani chahiye
//console.log(gameCounter) 101

// console.log("2" > 1); ture
// console.log("02"> 1); true but sometime unpredictable output in comparing different output
// console.log(null > 0)  false
// console.log(null == 0) false 
// console.log( null >= 0) true comparision cconvert null to 0

// console.log(undefined == 0); false 

// *******equality check and comparision are different working in javascript*******

//  === strict check (check values with datatypes)

console.log("2" === 2);