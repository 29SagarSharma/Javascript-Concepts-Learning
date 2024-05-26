//var c =300  // it still print 30 becs var overide the value outside the block scope of function

let a =300
if (true) {
    let a=10
    const b= 20
   // var c =30 //block scope problem function scope ke bhar bhi variable accesiable hota hnjisse value overreide hoti h confusion hota h 

   //console.log("INNER: ",a);
 }

//console.log(a);
//console.log(b);
//console.log(c);

/* for (let i = 0; i < array.length; i++) {
     const element = array[i];
    
}*/
//console ka global scope alag h aur nodejs use krke terminal me global scope alag h


function one(){
    const username="hitesh"

    function two(){
        const website="Youtube"
        console.log(username)
    }  
    //console.log(website)

    two()
}
//one()

if (true){
    const username= "hitesh"
    if(username == "hitesh"){
        const website= "youtube.com"
        //console.log(username+ website)
    }
    //console.log(website)
}

//console.log(username)

//+++++++++++++++++Interesting+++++++++++++++++++++

//synatx 1 //accesisable if print first from function
console.log(addone(5)) //6

function addone(num){
    return num +1
}
addone(5)

//syntax 2  unacesisable if print first before function called hosting 
addtwo(5) //error
const addtwo= function(num){   // sometime caled expression variables are pwerful in javascript can hold anything
    return num +2
}