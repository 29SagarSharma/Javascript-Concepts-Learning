//Immediatley Invoked Function Expression (IIFE)
//kyi baar global scope ke pollutin(varibales vgera) se diikat hoti h kyi baar tho nhe htane ke liye iife ka use kra
/*
(function chai(){
    //named IIFE jisme function keyword use kra h
    console.log(`DB CONNECTED`);
})(); // ; to end code otherwise give error

( (name) =>{
    console.log(`DB COONECTED TWO ${name}`);
} )('hitesh')*/

function one(){
    console.log("One")
}
function two(){
    console.log("Two")
}
function three(){
    console.log("Three")
}

one()
two()
three()
