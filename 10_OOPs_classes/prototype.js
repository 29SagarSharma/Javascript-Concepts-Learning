let myName = "hitesh    "

//console.log(myName.length) //11 which is wrong 
//console.log(myName.truelenght)//

let myHeros = ["thor", "spiderman"]

let heroPower ={
    thor: "hammer",
    spiderman: "sling",

 getSpiderPower : function(){
    //console.log(`Spidy power is ${this.spiderman}`)
 }
}
Object.prototype.hitesh= function(){
    //console.log(`hitesh is present in all obejcts`); //to make it like object to access it all
}

Array.prototype.heyHitesh= function(){
    console.log(`Hitesh says hello`);
}

//heroPower.hitesh() //hitesh is present in all objects

//myHeros.hitesh() //hitesh is present in all objects  you can acces all function ,array,string using it

//myHeros.heyHitesh() // myHeros can acces the function but not heropower becz it is object and this prototype is only for array

/////////////Inheritance////////////////

const user ={
    name: "chai",
    email: "chaoi@google.com"
}
const Teacher={
    makeVideo: true
}

const TeachingSupport ={
    isAvailable : false
}

const TASupport ={
    makeAssignment :"JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ =user //now teachert acces all properties of user

//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername= "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`)  //jisne call kiystha vhi print hoga
    console.log(`Ture Lenght is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea     ".trueLength()