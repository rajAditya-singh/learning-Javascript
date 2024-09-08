// const obj = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(obj);

// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);

const adi = {
    username: "Aditya",
    email: "adi@gmail.com",
    Id : "1234",

    status : function () {
        console.log("aditya");        
    }

}

// console.log(adi);
// console.log(Object.getOwnPropertyDescriptor(adi, "username"));

// const obj = Object.getOwnPropertyDescriptor(adi, "username")
// console.log(obj);

Object.defineProperty(adi, "username", {
    // writable: false,
    enumerable: false,
    // configurable: false
})

console.log(Object.getOwnPropertyDescriptor(adi, "username"));

for (const [key, value] of Object.entries(adi)) {
    if(typeof value !== "function")
    {
        console.log(`${key}:${value}`);
    }
}