const coding =['js','ruby','java','python','cpp']

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item  // for each loop does not return any value
// })

// console.log(values);


// const myNums = [1,2,3,4,5,6,7,8,9,10]

//  const newNums = myNums.filter( (num) => num>4 )  //curly braces issliye nayi lgaya kyuki uuse ek scope create hoga jiiski vjh se hmme return keyword likhna pdega 
//  console.log(newNums);

let userBooks = book.filter( (bk) => bk.genre === 'History') // jo historuy ke andr hogyi sirf vhiayegyi like fetching data from database

let userBooks = book.filter( (bk) => bk.publish >= 2000)

let userBooks = book.filter((bk) => {
    return bk.publish >=1995 && bk.genre === 'History'
})

console.log(userBooks);