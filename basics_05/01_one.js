// for 

for (let i = 0; i<= 10; i++) {
    const element = i;
    if(element ==5){
    //console.log("5 is best number")
    }
    //console.log(element);
}
//console.log(element) //Not accesible

for (let i = 0; i < 10; i++) {
    //console.log(`Outerloop Value: ${i}`)
    for (let j = 0; j < 10; j++) {
        //console.log(`Innerloop Value: ${j} and inner loop ${j}`)
        
        
    }
    
}   
// break and continue

for(let index =1; index <= 20; index++){
if(index == 5){
    console.log(`Detected 5`);
   // break;
    continue
}
    console.log(`Value of i is ${index}`)
}

