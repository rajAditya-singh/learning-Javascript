// outside scope 
let a = 300
// inside scope
if (true) {
    let a = 10
    const b = 20
    console.log("inside scope:", a);
    console.log("this is block scope");
}

console.log("outside scope", a);
console.log("this is global scope");
// console.log(b);
// console.log(c);