const accountId= 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"  //scope problem
accountCity = "Jaipur"
let accountState;

//  accountId= 2 //Not allowed

accountEmail = "hc@hc.com"
accountPassword = "2121212"
accountCity ="Bengaluru"

console.log(accountId);

/*
prefer not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])