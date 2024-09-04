//Object Litrals

const user = {
    username:"Aditya",
    logInCount : 8,
    signedIn : true,
    getUserDetails: function(){
        // console.log(`Username : ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor function
// const promiseOne = new Promise(()=>{})
// const date = new date();

function User(username, logInCount, isLoggedIn ) {
    this.username = username
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this
}
const userOne = new User("Adi", 8, true)
// console.log(userOne)
console.log(userOne.constructor);

const userTwo = new User("Raj",7, false)
// console.log(userTwo)

