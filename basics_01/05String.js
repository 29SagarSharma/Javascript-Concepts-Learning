const name ="hitesh"
const repocount =50

//console.log(name + repoCount + "Value");

console.log('hello my name is ${name} an my repo count is ${repoCount}');

const gameName = new String('hitesh-hc')

// console.log(gameName[0]);
// console.log(gameName,__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));  //inspect me console me jaake string method

const newString =gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4) //negative value only in slice not substring 
console.log(anotherString)

const newStringOne= "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'))