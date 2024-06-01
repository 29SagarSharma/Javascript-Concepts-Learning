const userEmail = "h@hitesh.ai"

if (userEmail) {
    console.log("Got User email");
    
}else{
    console.log("Don't have user email")
}

// falsy values

//false, 0 , -0, BigInt, 0n, "",  null , undefined, Nan

//truthy values

// "0" , 'false' , " " , [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).lenght === 0){
    console.log("Object is empty");
}

// false == 0 // true

// false = '' // true

// 0 == ''  //true

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10 //5
//val1 = null ?? 10  //10
//val1 = undefined ?? 15 //15
//val1 = null ?? 10 ??20 10   //used to handle error and to print specific value


// Terninary Operator

//consdition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")






console.log(val1);
