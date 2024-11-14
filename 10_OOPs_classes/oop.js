const user={
    username: "hitesh",
    loginCount: 8,
    signedIN: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
    }
}


//onsole.log(user.username);
//console.log(user.getUserDetails());
//console.log(this); //{} an empty object

//constructor function

function User(username, loginCount, isLoggedIn){
    this.username= username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.Username}`);
    }

    //return this //without return it will also print
}

const userOne =  new User('hitesh', 12,true) //due to new keyword value does not override each other otherwise they override each other
const userTwo = new User('chaiaurcode', 11 ,false)
//console.log(userOne);
//console.log(userTwo);

//using constructor keyword
console.log(userOne.constructor); //refernce hoti h khudi ke baare me yani user ke baaare me

//instanceof method to check whether they have same instance or not