function SayMyName() {
    console.log("R");
    console.log("A");
    console.log("J");
}
// Refrence(Execution)
// SayMyName()
// function addTwoNo(num1, num2)    //(num1, num2) this is parameters
// { 
//     console.log(num1+num2);
// }

// addTwoNo(3, 4)    //(3, 4) this is arguments
// addTwoNo(3, "4")
// addTwoNo(3, "a")
// addTwoNo(3, null)


function addTwoNo(num1, num2)  { 

    // otherway    
    // let result = num1+num2;
    // return result
    
    // otherway
    // return num1+num2
}

const result = addTwoNo(3, 4)
// console.log("RESULT : ", result);

    function LoginUserMessage(Username = "sam") {
    // function LoginUserMessage(Username) {
    if(Username === undefined) // we can also write (!username) 
        {
        console.log("Please enter your username");
        return
    }
    return`${Username} just logged In`
}
console.log(LoginUserMessage("Raj"));
console.log(LoginUserMessage());