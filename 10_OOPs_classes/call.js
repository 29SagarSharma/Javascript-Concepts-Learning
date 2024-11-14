function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("Called")
}

function createUser(username, email, password){
    SetUsername.call(this,username) //using call function to get the reference and this parameter so that upper fucntion ke username ko call krske

    this.email= email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
 console.log(chai);