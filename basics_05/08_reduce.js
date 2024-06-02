const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

const myTotal = myNums.reduce((acc,curr) => acc+curr, 0)

console.log(myTotal)

const shoppingmart= [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: "1999"
    },
    {
        itemName: "mobile dev couse",
        price : "12999"
    },
    {
        itemName: "data scinece",
        price: "13999"
    },
]
const priceToPay = shoppingmart.reduce((acc, item) =>item.price,0)
console.log(priceToPay)