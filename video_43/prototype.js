let myName = "Aditya      "

// console.log(myName.truelenght);


let myHeros = ["Thor", "spiderman"]

let herosPower = {
    Thor : "Hammer",
    spiderman : "Sling", 

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.aditya = function(){
    console.log("My name is adi");
    
}

Array.prototype.heyaditya = function(){
    console.log(`Aditya says hello`);
    
}
// herosPower.aditya()
// myHeros.aditya()
// myHeros.heyaditya()
// herosPower.heyaditya()


// Inheritance

const user = {
    username:"aditya",
    email:"adi@gmail.com"
}

const Teacher = {
    makeVideos : true
}

const TeacherSupport = {
    isAvailable : false
}

const TAsupport ={
    makeAssignment : 'Js Assignment',
    fullTime : true,

    __proto__ : TeacherSupport
}

// Teacher.__proto__ = user;

// Mordern Syntax

// Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUserName = "Aditya Raj Singh      "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`True length of the name is : ${this.trim().length}`);
}

anotherUserName.trueLength();
"Aditya    ".trueLength()
"     Raj".trueLength()
console.log();
