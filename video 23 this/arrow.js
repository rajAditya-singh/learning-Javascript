const user = {
    username : "Raj",
    Price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Aditya"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Raj"
//     console.log(this.username);
// }

// chai()

// +++++Arrow funtion++++++ // () => {}

const chai = () => {
    let username = "Raj"
    console.log(this);
}

chai()

// basic arrow funtion or explicit
// const addTow = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTow(3, 4));

// implicit Arrow funtion
// const addTow = (num1, num2) => num1 + num2
// const addTow = (num1, num2) => (num1 + num2)
const addTow = (num1, num2) => ({username : "Raj"})

console.log(addTow(3, 4));