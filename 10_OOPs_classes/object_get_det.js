const User={
    _email: 'h@hc.com',
    _password: "abc",

    get email(){  //it overide the process of value ko memeory se leke ane ka
        return this._email.toUpperCase()
    },
    set email(value){  // it overide the process of memeory deke ane ka
       this._email = value 
     }
}

const tea = Object.create(User)
console.log(tea.email);

