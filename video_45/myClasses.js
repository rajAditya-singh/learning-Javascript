// After ES6

// class user {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const adi = new user("adi", "adi@gmail.com", "123")
// console.log(adi.encryptPassword());
// console.log(adi.changeUsername());

//Behind the scene

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
};
user.prototype.encryptPassword = function(){
    return `${this.password}abc`;
};
user.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

const adi = new user("adi", "aditya@gmail.com", "123")

console.log(adi.encryptPassword());
console.log(adi.changeUsername())
