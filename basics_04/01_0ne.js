// if

const isuserloggedIn = true
const temperature = 41

// if( temperature === 40){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50")
// }

//  // < , > , <= , >= , == , != , ===(stricct check value with dataypes)

//  const score =200

//  if(score >100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
//  }
 //console.log(`user power: ${power}`);  //error becz scope 

 const balance = 1000

// if(balance > 500) console.log("test");  //implict scope in singlenline but semicolon is imp but it is unreadable code not reccomendable

//  if(balance < 500) {
//     console.log("less than");
//  } else if (balance < 750 ) {
//     console.log("less than 750");
//  } 

const userLoggedIn = true
const debitCard = true
const loggedInFormGoogle = false
const  loggedInFormEmail = true

if(userLoggedIn && debitCard && 2==3){   // && = check all the conditions
    console.log("Allow to buy coursee");
}

if(loggedInFormGoogle || loggedInFormEmail) {
    console.log("User Logged in");
}