const coding =['js','ruby','java','python','cpp']

// coding.forEach( function (val) {
//     console.log(val);             //funcvtion se
// })

// coding.forEach((item) => {
//     console.log(item)            //arrow function se
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

//arrow function bnake
// coding.forEach((item, index, arr)=>{
//     console.log(item , index, arr)
// })


const myCoding = [
    {
        languageName :"javascript",
        languageFileName: "js"
    },
    {
        languageName :"java",
        languageFileName: "java"
    },
    {
        languageName :"Pyhton",
        languageFileName: "py"
    },
]

myCoding.forEach((item) =>{
    console.log(item.languageName); //easy to acces value from object from array
})




