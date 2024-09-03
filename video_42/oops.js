//Object letrails
const user = {
    username : "Aditya",
    IslogedIn : true,
    mail : "aditya@gmail.com",
    
    gotUserDetails: function () {
        // console.log("Got userdetails from database");
        // console.log(`Username : ${this.username}`);      
        // console.log(this);
          
    }
}

// console.log(user.username);
// console.log(user.gotUserDetails());
// console.log(this);

//Constructor
// const promiseOne = new promise(()=>{})
    // This new keyword is constructor function
    // used to create new instances with overwriting the previous one

// example
function User(username, LoginCount, isLoggedIn) {
    this.username = username;
    this.LoginCount = LoginCount;
    this.isLoggedIn = isLoggedIn

    // return this
}

const userOne = new User("Raj", 9, true)
const userTwo = new User("adi", 8, false)
console.log(userOne);
console.log(userTwo);
