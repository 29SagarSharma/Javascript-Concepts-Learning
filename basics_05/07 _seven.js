const myNumers =[1,2,3,4,5,6,7,8]

//const newNums = myNumers.map((num) => num+10) //add 10m to each number

const newNums = myNumers
    .map( (num) => num*10)
    .map( (num) => num +1)
    .filter( (num) => num>=41)  // maps filters
console.log(newNums);