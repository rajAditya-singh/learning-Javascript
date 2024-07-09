//obj-constractor(Singleton)
// Object.create // This is constractor way (singleton)


//obj-literals
const mySymb = Symbol("key1")
const jsUser = {
    name: "Adi",
    "full name": "Aditya Raj Singh",
    [mySymb]: "mykey1", // This is a symbol syntax
    Age: 23,
    Location: "Noida",
    email: "adi@gmail.com",
    logedIn: false,
    recent_log_ins: ["mon", "tues", "wed"]
}

// console.log(jsUser.email); //one way of declaring 
// console.log(jsUser["email"]); //other way of declaring 
// console.log(jsUser[mySymb]);

// overwrite values 
jsUser.email = "Adityaraj@gmail.com"

// Freeze or lock values 
// Object.freeze(jsUser)
// jsUser.email = "raj@gmail.com"
// console.log(jsUser); 

jsUser.greeting = function () {
    console.log("Hello Js user");
}
jsUser.greeting2 = function () {
    console.log(`Hello Js user, ${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
