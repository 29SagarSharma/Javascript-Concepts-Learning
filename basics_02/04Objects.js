//const tinderUser = new Objects() //singleton
const tinderUser = {} //not singelton
tinderUser,id= "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false 

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
           firstname: "hitesh",
           lastname: "choudhary" 
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1,obj2, obj4)

const obj3= {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"  
    }
]

const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

   //cousre.courseInstructor

   const {courseInstructor: instructor} = course

   // console.log(courseInstructor);
   console.log(instructor);

//   JSON API same like object
// {
//       "name": "hitesh",
//       "cousrename": "js in hindi",
//       "price": "free"
// }

[
    {},  // json converter tool to study api have to study api give time on it
    {},
    {},
]