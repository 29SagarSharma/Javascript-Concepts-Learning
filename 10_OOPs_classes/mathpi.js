 const descriptor =Object.getOwnPropertyDescriptor(Math, "PI")

 //console.log(descriptor)

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai={
    name: 'ginegr chai',
    price: 250,
    isAvailable:true,

    orderChai: function(){
        console.log("chai");
    }
}

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
   // writable: false ,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));  //they  all change to false

for( let [key, value] of Object.entries(chai)){ //to make object iteratabel
    if(typeof value !== 'function'){
    console.log(`${key}: ${value}`)
    }
}







