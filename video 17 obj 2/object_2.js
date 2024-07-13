// const tinderUser = new Object() // This is a singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.location = "Delhi"
tinderUser.islogedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        UserFullName: {
            firstName: "Aditya",
            lastName: "Raj"
        }
    }
}

// console.log(regularUser.fullName.UserFullName.firstName);

const obj1 = {1:"a", 2:"b"} 
const obj2 = {3:"a", 4:"b"} 
const obj3 = {5:"a", 6:"b"} 
 
// const obj4 = Object.assign({}, obj1, obj2, obj3) //one way
const obj4 = {...obj1, ...obj2, ...obj3} //2nd way
// console.log(obj4);

const user = [
    {
        id:1,
        logedin:true
    },
    {
        id:1,
        logedin:true
    },
    {
        id:1,
        logedin:true
    }
]
user[1].id

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));