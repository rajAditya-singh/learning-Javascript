// outside scope 
let a = 300
// inside scope
if (true) {
    let a = 10
    const b = 20
    // console.log("inside scope:", a);
    // console.log("this is block scope");
}

// console.log("outside scope", a);
// console.log("this is global scope");
// console.log(b);
// console.log(c);

// nested scope
function one() {
    const username = "raj"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
} 
// one()

if (true) {
    const username = "Adi"
    if (username === "Adi") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// ++++++++++intresting+++++++++

console.log(addone(5));
function addone(num) {
    return num + 1
}
addone(5)


console.log(addTwo(5));
const addTwo = function (num) {
    return num + 2   
}